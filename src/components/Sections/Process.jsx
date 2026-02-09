import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

const stepsTemplate = [
  {
    title: 'Share Your Travel Route',
    text: 'Enter your departure city, destination, and intended travel dates. This helps generate a visa-ready flight reservation that matches embassy requirements.',
  },
  {
    title: 'Add Passenger Details & Validity',
    text: 'Enter passenger name(s), select ticket validity, and choose a one-way or round-trip flight. Pick a real airline itinerary that fits your visa and travel needs.',
  },
  {
    title: 'Secure Payment & Instant Delivery',
    text: 'Complete a quick, secure payment through our encrypted checkout. After confirmation, your dummy ticket with a valid PNR is emailed instantly as a downloadable PDF.',
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:m-0 md:p-0">
          {steps.map((step, i) => (
            <div className="min-w-80 max-w-full rounded-xl duration-300" key={i}>
              <div className="w-10 h-10 flex items-center justify-center bg-white text-primary-500 border border-primary-500 text-md font-medium font-outfit rounded-full">
                {i + 1}
              </div>
              <h3 className="text-[19px] lg:text-[20px] font-light capitalize font-outfit text-left my-3 p-0">
                {step.title}
              </h3>
              <p className="text-[16px] text-gray-900/55 font-light leading-6.5">
                {step.text.replaceAll('{keyword}', keyword)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
