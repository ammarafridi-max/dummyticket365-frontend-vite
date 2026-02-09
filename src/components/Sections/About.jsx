import { MdOutlineAirplaneTicket, MdOutlineHealthAndSafety, MdOutlineHotel } from 'react-icons/md';
import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

export default function About({
  title = 'About Us',
  text = 'We are an international travel services provider offering verifiable flight reservations and related travel documentation for travelers worldwide. Our services are used by thousands of customers each year for onward travel, immigration checks, and airline requirements. All reservations follow accepted airline formats and include a valid PNR code for verification',
}) {
  return (
    <PrimarySection className="pb-15 lg:pb-25" id="about">
      <Container className="flex flex-col lg:grid lg:grid-cols-[7fr_5fr] lg:items-center gap-5">
        <div className="w-full">
          <SectionTitle className="mb-6 lg:mb-6">{title}</SectionTitle>
          <p className="text-[16px] text-gray-900/70 font-light leading-6.5">{text}</p>
          <IconWithText
            icon={<MdOutlineAirplaneTicket />}
            title="Flight Reservations"
            description="Our dummy flight reservations include a verifiable PNR that can be checked on official airline websites. They are commonly used for visa applications, onward travel, airline check-ins, and immigration verification without buying a full ticket."
          />

          <IconWithText
            icon={<MdOutlineHotel />}
            title="Hotel Reservations"
            description="We provide hotel reservation documents on request using internationally accepted booking formats. These are suitable for visa applications, travel planning, and accommodation verification when proof of stay is required."
          />

          <IconWithText
            icon={<MdOutlineHealthAndSafety />}
            title="Travel Insurance"
            description="We offer genuine travel insurance policies covering medical emergencies, trip cancellations, and travel delays. These are real insurance documents issued by authorized providers and meet standard visa and travel requirements."
          />
        </div>
        <Gallery />
      </Container>
    </PrimarySection>
  );
}

function Gallery() {
  return (
    <div className="w-full min-h-[400px] lg:min-h-[500px] grid grid-cols-2 gap-3.75 lg:p-0">
      <div className="flex flex-col gap-3.75">
        <div className="bg-gray-100 rounded-sm h-[20%] overflow-hidden p-5.5"></div>
        <div className="bg-gray-100 rounded-sm h-[80%] overflow-hidden">
          <img
            src="/happy-traveler1.webp"
            className="w-full h-full object-cover object-center"
            alt="Happy couple with their approved visas"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3.75">
        <div className="bg-gray-100 rounded-sm h-[80%] overflow-hidden">
          <img
            src="/happy-traveler2.webp"
            className="w-full h-full object-cover object-center"
            alt="A happy couple with their flight reservations"
          />
        </div>
        <div className="bg-gray-100 rounded-sm h-[20%] overflow-hidden p-5.5">
          <img
            src="/travel-icon.webp"
            className="w-full h-full object-contain object-center"
            alt="Travel icon"
          />
        </div>
      </div>
    </div>
  );
}

const IconWithText = ({ icon, title, description }) => (
  <div className="grid grid-cols-[auto_1fr] gap-5 items-center mt-6">
    <div className="w-[40px] h-[40px] text-xl rounded-full bg-primary-500 text-white flex items-center justify-center">
      {icon}
    </div>
    <p className="text-[16px] text-gray-900/70 font-light leading-6.5">
      <span className="font-normal text-gray-900/90">{title}: </span>
      {description}
    </p>
  </div>
);
