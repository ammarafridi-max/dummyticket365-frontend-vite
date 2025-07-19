import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiCheck,
} from 'react-icons/hi2';
import Container from '../Container';
import PrimarySection from '../PrimarySection';

export default function Benefits({ keyword = 'dummy ticket' }) {
  return (
    <PrimarySection className="pt-20" id="benefits">
      <Container>
        <div className="block md:grid md:grid-cols-3 gap-10">
          <IconCard
            icon={<HiCheck />}
            title="Reliable"
            text={`We issue ${keyword}s through official airline systems, ensuring they are 100% genuine, verifiable, and widely accepted by embassies and consulates.`}
          />
          <IconCard
            icon={<HiOutlineClock />}
            title="Fast Delivery"
            text={`With our fast and automated system, you’ll receive your verifiable ${keyword} by email within minutes—no long waits, no complications.`}
          />
          <IconCard
            icon={<HiOutlineCurrencyDollar />}
            title="Great Value"
            text="Starting from just USD 12, our tickets combine affordability with professional quality, helping travelers save money without compromising reliability."
          />
        </div>
      </Container>
    </PrimarySection>
  );
}

function IconCard({ icon, title, text }) {
  return (
    <div className="w-full mb-12 text-center md:mb-0">
      <div className="w-fit text-3xl text-primary-500 flex items-center justify-center bg-primary-50 p-3.75 mx-auto rounded-full overflow-hidden">
        {icon}
      </div>
      <h3 className="text-lg my-4.5 p-0 font-bold font-merriweather md:text-[18px]">
        {title}
      </h3>
      <p className="text-center text-[17px] font-light leading-6">{text}</p>
    </div>
  );
}
