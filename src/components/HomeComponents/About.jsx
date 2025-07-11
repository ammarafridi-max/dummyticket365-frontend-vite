import styled from 'styled-components';
import {
  MdOutlineAirplaneTicket,
  MdOutlineHealthAndSafety,
  MdOutlineHotel,
} from 'react-icons/md';
import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';
import Paragraph from '../Paragraph';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const LeftContainer = styled.div`
  width: 58%;
  padding: 0px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default function About() {
  return (
    <PrimarySection id="about" pt="0px" pb="100px">
      <StyledContainer>
        <LeftContainer>
          <SectionTitle mb="30px" subtitle="About Dummy Ticket 365">
            Who We Are
          </SectionTitle>
          <Paragraph fontSize="18px" color="black" mb="20px">
            Dummy Ticket 365 is a leading provider of flight reservations, hotel
            bookings, and travel insurance. Each year, we support thousands of
            travelers in securing their visit visas. Our dummy tickets are
            widely accepted as proof of onward travel at airports worldwide.
          </Paragraph>
          <IconWithText
            icon={<MdOutlineAirplaneTicket />}
            title="Flight Reservations"
            description="Also known as dummy or onward tickets, these are ideal for visa applications and airport travel requirements."
          />
          <IconWithText
            icon={<MdOutlineHotel />}
            title="Hotel Reservations"
            description="Authentic and verifiable hotel bookings commonly required for visa processing as proof of accommodation."
          />
          <IconWithText
            icon={<MdOutlineHealthAndSafety />}
            title="Travel Insurance"
            description="Trusted and comprehensive policies covering medical emergencies, cancellations, delays, and more."
          />
        </LeftContainer>
        <Gallery />
      </StyledContainer>
    </PrimarySection>
  );
}

const GalleryContainer = styled.div`
  width: 42%;
  min-height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 0px;
  @media screen and (max-width: 991px) {
    min-height: 400px;
    margin-top: 50px;
    width: 100%;
  }
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SmallImage = styled.div`
  background-color: var(--grey-color-100);
  border-radius: 5px;
  height: 20%;
  padding: 30px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LargeImage = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 80%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Gallery() {
  return (
    <GalleryContainer>
      <Col1>
        <SmallImage>
          <img
            src="/trustpilot.webp"
            alt="My Dummy Ticket has received over 50 reviews on Trustpilot, with an average rating of 4.5+"
          />
        </SmallImage>
        <LargeImage>
          <img
            src="/happy-traveler1.webp"
            alt="A happy couple receiving their Schengen visa"
          />
        </LargeImage>
      </Col1>
      <Col2>
        <LargeImage>
          <img
            src="/happy-traveler2.webp"
            alt="A happy couple with their passports, dummy tickets, and other related documents for their visa appointment"
          />
        </LargeImage>
        <SmallImage>
          <img
            src="/travel-icon.webp"
            alt="Dummy tickets, hotel reservations, and travel insurance"
          />
        </SmallImage>
      </Col2>
    </GalleryContainer>
  );
}

const IconContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 11fr;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 2fr 10fr;
  }
`;

const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 100px;
  background-color: var(--primary-color-500);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWithText = ({ icon, title, description }) => (
  <IconContainer>
    <IconDiv>{icon}</IconDiv>
    <Paragraph fontSize="18px">
      <span className="semi-bold">{title}: </span>
      {description}
    </Paragraph>
  </IconContainer>
);

// function Gallery() {
//   return (
//     <div className={`col-12 col-md-6 col-lg-5 row mx-auto p-0 ${styles.gallery}`}>
//       <div className={styles.grid1}>
//         <div className={styles.img1}>
//           <a href="https://www.trustpilot.com/review/mydummyticket.ae" target="_blank">
//             Rated 4.5+ on <img src={trustpilot} className={styles.trustpilotIcon} />
//           </a>
//         </div>
//         <div className={styles.img2}>
//           <img src={happyTraveler1} />
//         </div>
//       </div>
//       <div className={styles.grid2}>
//         <div className={styles.img1}>
//           <img src={happyTraveler2} />
//         </div>
//         <div className={styles.img2}>
//           <img src={travelIcon} className={styles.travelIcon} />
//         </div>
//       </div>
//     </div>
//   );
// }
