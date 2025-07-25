import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  updatePassengerData,
  updatePricing,
  submitFormData,
  initializePassengers,
  updateField,
} from '../../redux/slices/ticketFormSlice';
import { formatDate } from '../../utils/formatDate';
import styled from 'styled-components';
import Error from '../Error';
import Input from '../FormElements/Input';
import Label from '../FormElements/Label';
import SelectDate from '../FormElements/SelectDate';
import SelectTitle from '../FormElements/SelectTitle';
import TextArea from '../FormElements/TextArea';
import Email from '../FormElements/Email';
import PhoneNumber from '../FormElements/PhoneNumber';
import PrimaryButton from '../PrimaryButton';

const FormRow = ({ children }) => {
  return (
    <div className="block md:grid md:grid-cols-2 md:gap-2.5">{children}</div>
  );
};

const FormItem = ({ children }) => {
  return <div className="w-full mb-2">{children}</div>;
};

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const {
    loading,
    quantity,
    passengers,
    email,
    phoneNumber,
    ticketValidity,
    receiveNow,
    receiptDate,
    message,
    passengerErrors,
    errorMessage,
  } = useSelector((state) => state.ticketForm);

  useEffect(() => {
    if (quantity && (!passengers || passengers.length === 0)) {
      dispatch(initializePassengers());
    }
  }, [dispatch, quantity, passengers]);

  useEffect(() => {
    // Check if any required field is empty
    const hasEmptyFields = () => {
      // Check passenger details
      const hasEmptyPassengerFields = passengers?.some(
        (passenger) =>
          !passenger.title || !passenger.firstName || !passenger.lastName
      );
      if (hasEmptyPassengerFields) {
        return true;
      }

      // Check contact details
      if (!email || !phoneNumber?.code || !phoneNumber?.digits) {
        return true;
      }

      // Check receipt date if not receiving now
      if (!receiveNow && !receiptDate) {
        return true;
      }

      return false;
    };

    setIsSubmitDisabled(hasEmptyFields());
  }, [passengers, email, phoneNumber, receiveNow, receiptDate]);

  const handleUpdatePassenger = (index, field, value) => {
    dispatch(
      updatePassengerData({
        type: 'UPDATE_SINGLE',
        payload: { index, field, value },
      })
    );
  };

  const handleEmailChange = (e) => {
    dispatch(updateField({ field: 'email', value: e.target.value }));
  };

  const handleValidityChange = (e) => {
    dispatch(
      updatePricing({
        type: 'SET_VALIDITY',
        validity: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      localStorage.setItem('email', email);
      localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));

      const result = await dispatch(submitFormData());

      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/booking/review-details');
      } else {
        toast.error('An error occurred while submitting the form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred while submitting the form');
    }
  };

  return (
    <form
      className="mt-2.5 p-5 md:p-6.25 rounded-xl bg-gray-100"
      onSubmit={handleSubmit}
    >
      {passengers && passengers.length > 0 && (
        <PassengerData
          passengers={passengers}
          handleUpdatePassenger={handleUpdatePassenger}
          passengerErrors={passengerErrors}
        />
      )}
      <ContactDetails
        email={email}
        handleEmailChange={handleEmailChange}
        phoneNumber={phoneNumber}
        setPhoneNumber={(value) =>
          dispatch(updateField({ field: 'phoneNumber', value }))
        }
      />
      <TicketValidityOptions
        ticketValidity={ticketValidity}
        handleValidityChange={handleValidityChange}
      />
      {/* <ReceiptOptions
        receiveNow={receiveNow}
        setReceiveNow={(value) =>
          dispatch(updateField({ field: 'receiveNow', value }))
        }
        receiptDate={receiptDate}
        setReceiptDate={(date) =>
          dispatch(updateField({ field: 'receiptDate', value: date }))
        }
      />
      <Message
        message={message}
        setMessage={(value) =>
          dispatch(updateField({ field: 'message', value }))
        }
      /> */}
      {errorMessage && <Error>{errorMessage}</Error>}
      <PrimaryButton
        className="w-full mt-5"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Review Your Information'}
      </PrimaryButton>
    </form>
  );
}

function PassengerData({ passengers, handleUpdatePassenger, passengerErrors }) {
  let adultCount = 0;
  let childCount = 0;
  let infantCount = 0;

  return (
    <FormRow>
      {passengers?.map((passenger, index) => {
        let label = '';
        if (passenger.type === 'Adult') {
          label = `Adult ${++adultCount}`;
        } else if (passenger.type === 'Child') {
          label = `Child ${++childCount}`;
        } else if (passenger.type === 'Infant') {
          label = `Infant ${++infantCount}`;
        }
        return (
          <FormItem key={index}>
            <Label>{label}</Label>
            <div className="w-full flex gap-1.25 mt-2">
              <SelectTitle
                value={passenger.title}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'title', e.target.value)
                }
              />
              <Input
                className="w-100"
                type="text"
                required
                name={`firstName${index}`}
                id={`firstName${index}`}
                placeholder="First Name"
                value={passenger.firstName}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'firstName', e.target.value)
                }
              />
              <Input
                className="w-100"
                type="text"
                required
                name={`lastName${index}`}
                id={`lastName${index}`}
                placeholder="Last Name"
                value={passenger.lastName}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'lastName', e.target.value)
                }
              />
            </div>
            {passengerErrors && passengerErrors[index] && (
              <>
                {passengerErrors[index].firstName && (
                  <Error>{passengerErrors[index].firstName}</Error>
                )}
                {passengerErrors[index].lastName && (
                  <Error>{passengerErrors[index].lastName}</Error>
                )}
              </>
            )}
          </FormItem>
        );
      })}
    </FormRow>
  );
}

function ContactDetails({
  email,
  handleEmailChange,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <FormRow>
      <FormItem>
        <Email email={email} handleEmailChange={handleEmailChange} />
      </FormItem>
      <FormItem>
        <PhoneNumber
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </FormItem>
    </FormRow>
  );
}

const TicketValidityWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  position: relative;
  flex: 1;
  & input[type='radio'] {
    position: absolute;
    opacity: 0;
  }
  & input[type='radio']:checked + div {
    background-color: var(--primary-color-500);
    color: #fff;
    border: 1px solid var(--primary-color-500);
  }
  & input[type='radio']:checked + div span {
    color: var(--primary-color-100);
  }
  &:active {
    background-color: #dee2e6;
  }
  &:hover {
    background-color: #e9ecef;
  }
`;

const TicketValidityInnerBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: 4px;
  @media screen and (max-width: 991px) {
    padding: 12.5px;
  }
`;

const Price = styled.span`
  color: var(--grey-color-600);
  font-weight: 500;
  margin-left: 3px;
`;

function TicketValidityOptions({ ticketValidity }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      updatePricing({
        type: 'SET_VALIDITY',
        validity: e.target.value,
      })
    );
  };

  const options = [
    { value: '2 Days', label: '2 Days', price: 13 },
    { value: '7 Days', label: '7 Days', price: 20 },
    { value: '14 Days', label: '14 Days', price: 23 },
  ];

  return (
    <TicketValidityWrapper>
      <Label htmlFor="ticketValidity">Choose Ticket Validity</Label>
      <div className="block md:flex rounded-md overflow-hidden shadow-(--input-box-shadow)">
        {options.map((option, index) => (
          <Option key={index}>
            <input
              type="radio"
              name="ticketValidity"
              value={option.value}
              checked={ticketValidity === option.value}
              onChange={handleChange} // Use the local handleChange
            />
            <TicketValidityInnerBox>
              {option.label} - <Price>USD {option?.price} / person</Price>
            </TicketValidityInnerBox>
          </Option>
        ))}
      </div>
    </TicketValidityWrapper>
  );
}

function ReceiptOptions({
  receiveNow,
  receiptDate,
  setReceiveNow,
  setReceiptDate,
}) {
  return (
    <div className="flex flex-col my-5">
      <Label>Receive Ticket On</Label>
      <div>
        <div className="flex items-center gap-3 mb-1.25 text-[15px] font-nunito">
          <input
            type="radio"
            name="receiveTicket"
            checked={receiveNow}
            onChange={() => setReceiveNow(true)}
          />
          <span>I need it now</span>
        </div>
        <div className="flex items-center gap-3 mb-1.25 text-[15px] font-nunito">
          <input
            type="radio"
            name="receiveTicket"
            checked={!receiveNow}
            onChange={() => setReceiveNow(false)}
          />
          <span>I need it on a later date</span>
        </div>
      </div>
      {!receiveNow && (
        <FormRow>
          <FormItem>
            <SelectDate
              selectedDate={receiptDate && formatDate(receiptDate)}
              onDateSelect={setReceiptDate}
              minDate={new Date()}
              placeholder="Select receipt date"
            />
          </FormItem>
        </FormRow>
      )}
    </div>
  );
}

function Message({ message, setMessage }) {
  return (
    <div className="flex flex-col">
      <Label optional>Special Requests</Label>
      <TextArea
        value={message}
        placeholder="Special requests"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
}
