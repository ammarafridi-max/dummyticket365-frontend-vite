import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

const stepsTemplate = [
  {
    title: 'Enters Routes and dates',
    text: 'Enter your departure and destination cities and select your intended travel date. This helps generate a valid onward travel reservation that meets airline and immigration requirements',
  },
  {
    title: 'Select Your Onward Flight',
    text: 'Browse real airline itineraries and select an onward flight that matches your travel plans. All reservations include a verifiable PNR code',
  },
  {
    title: 'Secure Payment & Instant Delivery',
    text: 'Complete your payment securely and receive your dummy ticket instantly by email. Your onward ticket is ready for airline check-in or immigration verification',
  },
];


export default function Process({
  title = 'Simple, Hassle-Free Process',
  subtitle = 'How it Works',
  keyword = 'dummy ticket',
  steps = stepsTemplate,
}) {
  return (
    <PrimarySection className="py-15 lg:py-30" id="process">
      <Container>
        <SectionTitle textAlign="center" subtitle={subtitle} mb="7">
          {title}
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:m-0 md:p-0">
          {steps.map((step, i) => (
            <div className="min-w-80 max-w-full rounded-xl duration-300" key={i}>
              <div className="w-10 h-10 flex items-center justify-center bg-white text-primary-500 border border-primary-500 text-md font-medium font-outfit rounded-full">
                {i + 1}
              </div>
              <h3 className="text-[19px] lg:text-[20px] font-light capitalize font-outfit text-left my-3 p-0">
                {step.title}
              </h3>
              <p className="text-[16px] text-gray-900/70 font-extralight leading-6.5">
                {step.text.replaceAll('{keyword}', keyword)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
