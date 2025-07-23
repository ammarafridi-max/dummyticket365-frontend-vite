import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../config';
import { formatISODuration } from '../../utils/formatISODuration';

const routes = JSON.parse(localStorage.getItem('routes'));
const email = localStorage.getItem('email') || '';
const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber')) || {
  code: '',
  digits: '',
};

const initialState = {
  loading: '',
  type: 'One Way',
  from: routes?.from || '',
  to: routes?.to || '',
  departureDate: '',
  returnDate: '',
  quantity: { adults: 1, children: 0, infants: 0 },
  ticketPrice: 12,
  passengers: [],
  email,
  phoneNumber,
  ticketValidity: '2 Days',
  receiveNow: true,
  receiptDate: '',
  message: '',
  paymentStatus: 'UNPAID',
  departureFlight: '',
  returnFlight: '',
  totalAmount: 12,
  passengerErrors: [],
  errorMessage: '',
  phoneNumberError: '',
};

// Slice
const ticketFormSlice = createSlice({
  name: 'ticketForm',
  initialState,
  reducers: {
    updateField: (state, { payload }) => {
      const { field, value } = payload;
      state[field] = value;
    },

    updatePassengerData: (state, { payload }) => {
      const { type, payload: data } = payload;

      switch (type) {
        case 'SET_ALL':
          state.passengers = data;
          break;

        case 'UPDATE_SINGLE':
          const { index, field, value } = data;
          state.passengers[index][field] = value;

          if (!state.passengerErrors[index]) {
            state.passengerErrors[index] = {};
          }

          if (['firstName', 'lastName'].includes(field)) {
            state.passengerErrors[index][field] = value.trim()
              ? ''
              : `${field} is required`;
          }
          break;

        case 'GENERATE_LIST':
          const newPassengers = [];
          [
            ['Adult', data.adults],
            ['Child', data.children],
            ['Infant', data.infants],
          ].forEach(([type, count]) => {
            for (let i = 0; i < count; i++) {
              newPassengers.push({
                type,
                title: 'Mr.',
                firstName: '',
                lastName: '',
              });
            }
          });
          state.passengers = newPassengers;
          break;
      }
    },

    updatePricing: (state, { payload }) => {
      const { type, validity, price } = payload;

      switch (type) {
        case 'SET_VALIDITY':
          state.ticketValidity = validity;
          state.ticketPrice =
            validity === '7 Days' ? 19 : validity === '14 Days' ? 22 : 12;
          break;

        case 'CALCULATE_TOTAL':
          const { adults, children } = state.quantity;
          state.totalAmount = state.ticketPrice * (adults + children);
          break;

        case 'SET_PRICE':
          state.ticketPrice = price;
          break;
      }
    },

    updateValidation: (state, { payload }) => {
      const { type, payload: data } = payload;

      switch (type) {
        case 'PASSENGER_ERRORS':
          state.passengerErrors = data;
          break;

        case 'ERROR_MESSAGE':
          state.errorMessage = data;
          break;

        case 'PHONE_ERROR':
          state.phoneNumberError = data;
          break;

        case 'VALIDATE_PASSENGERS':
          const errors = state.passengers.map(({ firstName, lastName }) => ({
            firstName: firstName
              ? /^[A-Za-z\s]+$/.test(firstName.trim())
                ? ''
                : 'Only letters and spaces allowed'
              : 'First name required',
            lastName: lastName
              ? /^[A-Za-z\s]+$/.test(lastName.trim())
                ? ''
                : 'Only letters and spaces allowed'
              : 'Last name required',
          }));
          state.passengerErrors = errors;
          return errors.every((err) => !Object.values(err).some(Boolean));
      }
    },

    validateForm: (state) => {
      const errors = state.passengers.map(({ firstName, lastName }) => ({
        firstName: firstName
          ? /^[A-Za-z\s]+$/.test(firstName.trim())
            ? ''
            : 'Only letters and spaces allowed'
          : 'First name required',
        lastName: lastName
          ? /^[A-Za-z\s]+$/.test(lastName.trim())
            ? ''
            : 'Only letters and spaces allowed'
          : 'Last name required',
      }));
      state.passengerErrors = errors;

      const phoneValid = state.phoneNumber.code && state.phoneNumber.digits;
      state.phoneNumberError = phoneValid ? '' : 'Phone number is required';

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      state.errorMessage = emailValid ? '' : 'Valid email is required';
    },

    resetForm: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitFormData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitFormData.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Selectors
export const selectForm = (state) => state.ticketForm;
export const selectPassengers = (state) => state.ticketForm.passengers;
export const selectEmail = (state) => state.ticketForm.email;
export const selectPhoneNumber = (state) => state.ticketForm.phoneNumber;
export const selectTicketValidity = (state) => state.ticketForm.ticketValidity;
export const selectReceiveNow = (state) => state.ticketForm.receiveNow;
export const selectReceiptDate = (state) => state.ticketForm.receiptDate;
export const selectMessage = (state) => state.ticketForm.message;
export const selectDepartureFlight = (state) =>
  state.ticketForm.departureFlight;
export const selectReturnFlight = (state) => state.ticketForm.returnFlight;
export const selectTotalAmount = (state) => state.ticketForm.totalAmount;
export const selectPassengerErrors = (state) =>
  state.ticketForm.passengerErrors;
export const selectErrorMessage = (state) => state.ticketForm.errorMessage;
export const selectPhoneNumberError = (state) =>
  state.ticketForm.phoneNumberError;
export const selectDummyPrice = (state) => state.ticketForm.ticketPrice;

export const selectFormValidity = (state) => {
  const { passengerErrors, phoneNumberError, errorMessage } = state.ticketForm;
  return (
    passengerErrors.every((err) => !Object.values(err).some(Boolean)) &&
    !phoneNumberError &&
    !errorMessage
  );
};

// Thunks
export const submitFormData = createAsyncThunk(
  'ticketForm/submitFormData',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    dispatch(validateForm());

    const isValid = selectFormValidity(state);
    if (!isValid) return rejectWithValue('Validation failed');

    const {
      type,
      from,
      to,
      departureDate,
      returnDate,
      quantity,
      passengers,
      email,
      phoneNumber,
      message,
      paymentStatus,
      departureFlight,
      returnFlight,
      ticketValidity,
      receiveNow,
      receiptDate,
      totalAmount,
    } = state.ticketForm;

    const payload = {
      type,
      from,
      to,
      departureDate,
      returnDate: returnDate || null,
      quantity,
      passengers,
      email,
      phoneNumber,
      message,
      status: paymentStatus,
      ticketValidity,
      ticketAvailability: {
        immediate: receiveNow,
        receiptDate: receiveNow ? null : receiptDate,
      },
      flightDetails: {
        departureFlight,
        returnFlight: returnFlight || null,
      },
      totalAmount,
    };

    try {
      const res = await fetch(`${BASEURL}/api/ticket`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      localStorage.setItem('SESSION_ID', data.sessionId);
      return data;
    } catch (error) {
      console.error('Submission error:', error);
      return rejectWithValue('Failed to create the ticket. Please try again.');
    }
  }
);

export const initializePassengers = createAsyncThunk(
  'ticketForm/initializePassengers',
  async (_, { getState, dispatch }) => {
    const quantity = getState().ticketForm.quantity;
    dispatch(updatePassengerData({ type: 'GENERATE_LIST', payload: quantity }));
  }
);

export function transformItinerary(itinerary) {
  return {
    duration: formatISODuration(itinerary.duration),
    segments: itinerary.segments.map((segment) => ({
      departure: {
        iataCode: segment.departure.iataCode,
        date: segment.departure.at.split('T')[0],
        time: segment.departure.at.split('T')[1],
      },
      arrival: {
        iataCode: segment.arrival.iataCode,
        date: segment.arrival.at.split('T')[0],
        time: segment.arrival.at.split('T')[1],
      },
      duration: formatISODuration(segment.duration),
      carrierCode: segment.carrierCode,
      flightNumber: segment.number,
      aircraftCode: segment.aircraft?.code,
      airline: {
        name:
          segment.airlineDetail?.commonName ||
          segment.airlineDetail?.businessName ||
          '',
        logo: `${segment.airlineDetail?.logo}` || '',
      },
    })),
  };
}

// Actions
export const {
  updateField,
  updatePassengerData,
  updatePricing,
  updateValidation,
  resetForm,
  validateForm,
} = ticketFormSlice.actions;

export default ticketFormSlice.reducer;
