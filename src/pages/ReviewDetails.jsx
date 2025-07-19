import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createStipePaymentLink } from '../redux/slices/stripePayment';
import { fetchFormDetails } from '../redux/slices/fetchTicketDetails';
import { formatDate } from '../utils/formatDate';
import { FaSpinner } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  width: 50%;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgb(220, 220, 220);
  background-color: white;
  font-family: 'Nunito Variable';

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 1.2rem;
  }
`;

const Detail = styled.div`
  margin-bottom: 4px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    font-size: 0.9rem;
  }
`;

const PassengerInfo = styled.div`
  margin-bottom: 8px;
  font-size: 1rem;

  @media (max-width: 991px) {
    font-size: 0.9rem;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary-color);
`;

export default function ReviewDetails() {
  const dispatch = useDispatch();
  const { formDetails, status } = useSelector((state) => state.formDetails);
  const { stripeStatus, data, stripeError } = useSelector(
    (state) => state.payment
  );
  const navigate = useNavigate();
  const sessionId = localStorage.getItem('SESSION_ID');

  let additionalPrice = 0;
  let validityText = '2 Days';

  if (formDetails?.ticketValidity === '7 Days') {
    additionalPrice = 7;
    validityText = '7 Days';
  }
  if (formDetails?.ticketValidity === '14 Days') {
    additionalPrice = 10;
    validityText = '14 Days';
  }

  const { adults = 0, children = 0 } = formDetails?.quantity || {};
  const totalQuantity = adults + children;
  const ticketAvailability = formDetails?.ticketAvailability || {};
  const totalAmount = 13 * totalQuantity + additionalPrice * totalQuantity;

  useEffect(() => {
    if (sessionId) {
      dispatch(fetchFormDetails(sessionId));
    }
  }, [dispatch]);

  const handleConfirm = () => {
    if (sessionId) {
      dispatch(createStipePaymentLink({ ...formDetails, totalAmount }));
    }
  };

  useEffect(() => {
    if (stripeError) {
      toast.error('An error occurred while processing your payment');
    }
  }, [stripeError]);

  useEffect(() => {
    if (stripeStatus === 'succeeded' && data?.url) {
      window.location.href = data.url;
    }
  }, [stripeStatus, data]);

  let content;

  if (status === 'loading') {
    content = <LoadingText>Loading...</LoadingText>;
  } else if (status === 'succeeded' && formDetails) {
    const groupedPassengers =
      formDetails?.passengers?.reduce((acc, passenger) => {
        if (!acc[passenger.type]) {
          acc[passenger.type] = [];
        }
        acc[passenger.type].push(passenger);
        return acc;
      }, {}) || {};

    let statusText;

    if (formDetails?.paymentStatus === 'UNPAID') {
      statusText = 'Unpaid';
    }

    let availability;
    if (formDetails?.ticketAvailability?.immediate === true) {
      availability = true;
    }
    if (formDetails?.ticketAvailability?.immediate === false) {
      availability = false;
    }

    content = (
      <>
        <Helmet>
          <title>Review Your Information</title>
        </Helmet>

        <div className="block md:flex md:gap-4">
          <BookingDetailBox formDetails={formDetails} statusText={statusText} />
          <FlightDetailBox
            from={formDetails.from}
            to={formDetails.to}
            departureDate={formDetails.departureDate}
            returnDate={formDetails.returnDate}
            departureFlight={formDetails.flightDetails.departureFlight}
            returnFlight={formDetails.flightDetails.returnFlight}
          />
        </div>

        <div className="block md:flex md:gap-4">
          <TicketAvailabilityDetail
            validityText={validityText}
            availability={availability}
            ticketAvailability={ticketAvailability}
          />
          <PassengerDetail groupedPassengers={groupedPassengers} />
        </div>

        <OrderTotalDetail
          totalQuantity={totalQuantity}
          additionalPrice={additionalPrice}
          totalAmount={totalAmount}
        />
        <ProceedButton
          handleConfirm={handleConfirm}
          stripeStatus={stripeStatus}
          totalAmount={totalAmount}
        />
      </>
    );
  }

  return <>{content}</>;
}

function BookingDetailBox({ formDetails, statusText }) {
  return (
    <Section>
      <SectionTitle>Booking Details</SectionTitle>
      <Detail>
        <span>Booking Date:</span> {formatDate(formDetails.createdAt)}
      </Detail>
      <Detail>
        <span>Email:</span> {formDetails.email}
      </Detail>
      <Detail>
        <span>Phone Number:</span> {formDetails.phoneNumber.code}
        {formDetails.phoneNumber.digits}
      </Detail>
      {formDetails.message && (
        <Detail>
          <span>Message:</span> {formDetails.message}
        </Detail>
      )}
      <Detail>
        <span>Status:</span> Payment Pending
      </Detail>
      <Detail>
        <span>Ticket Validity:</span> {formDetails.ticketValidity}
      </Detail>
      {/* <Detail>
        <span>Ticket Delivery:</span> {formDetails.ticketValidity}
      </Detail> */}
    </Section>
  );
}

function FlightDetailBox({
  from,
  to,
  departureDate,
  returnDate,
  departureFlight,
  returnFlight,
}) {
  return (
    <Section>
      <SectionTitle>Flight Information</SectionTitle>
      <Detail>
        <span>From:</span> {from}
      </Detail>
      <Detail>
        <span>To:</span> {to}
      </Detail>
      <Detail>
        <span>Departure Date:</span> {formatDate(departureDate)}
      </Detail>
      <Detail>
        <span>Departure Flight:</span> {departureFlight.segments[0].carrierCode}{' '}
        {departureFlight.segments[0].flightNumber}
      </Detail>
      {returnDate && (
        <Detail>
          <span>Return Date:</span> {formatDate(returnDate)}
        </Detail>
      )}
      {returnFlight && (
        <Detail>
          <span>Return Flight:</span> {returnFlight.segments[0].carrierCode}{' '}
          {returnFlight.segments[0].flightNumber}
        </Detail>
      )}
    </Section>
  );
}

function TicketAvailabilityDetail({
  validityText,
  availability,
  ticketAvailability,
}) {
  return (
    <Section>
      <SectionTitle>Ticket Availability</SectionTitle>
      <Detail>
        <span>Ticket Validity:</span> {validityText}
      </Detail>
      <Detail>
        {availability ? (
          <>
            <span>Availability Type:</span> Immediate{' '}
          </>
        ) : (
          <>
            <span>Availability Type:</span> Later{' '}
          </>
        )}
      </Detail>
      {!availability && (
        <Detail>
          <span>Receipt Date:</span>{' '}
          {formatDate(ticketAvailability.receiptDate)}
        </Detail>
      )}
    </Section>
  );
}

function PassengerDetail({ groupedPassengers }) {
  return (
    <Section>
      <SectionTitle>Passenger Information</SectionTitle>
      {Object.keys(groupedPassengers).map((type) => (
        <div key={type}>
          {groupedPassengers[type].map((passenger, index) => (
            <PassengerInfo key={index}>
              <span>
                {type} {index + 1}:
              </span>{' '}
              {passenger.title} {passenger.firstName} {passenger.lastName}
            </PassengerInfo>
          ))}
        </div>
      ))}
    </Section>
  );
}

function OrderTotalDetail({ totalQuantity, additionalPrice, totalAmount }) {
  return (
    <Box>
      <Section>
        <SectionTitle>Order Total</SectionTitle>
        <Detail>
          <span>Dummy Ticket Price:</span> USD {13 * totalQuantity}
        </Detail>
        <Detail>
          <span>Additional Validity Price:</span>
          {additionalPrice === 0
            ? 'USD 0'
            : `USD ${additionalPrice * totalQuantity}`}
        </Detail>
        <Detail>
          <span>Total:</span> USD {totalAmount}
        </Detail>
      </Section>
    </Box>
  );
}

function ProceedButton({ handleConfirm, stripeStatus, totalAmount }) {
  return (
    <div className="flex items-center justify-center">
      <PrimaryButton
        onClick={handleConfirm}
        disabled={stripeStatus === 'loading'}
      >
        {stripeStatus === 'loading'
          ? 'Processing...'
          : `Proceed To Payment (USD ${totalAmount})`}
      </PrimaryButton>
    </div>
  );
}
