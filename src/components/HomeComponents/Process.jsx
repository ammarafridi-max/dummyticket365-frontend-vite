import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

const steps = [
  {
    title: 'Route and dates',
    text: 'Enter your departure and arrival cities, select your travel dates, and begin filling out your booking information',
  },
  {
    title: 'Select Flight',
    text: 'View the list of available flights based on your selected route and dates, then choose the option that suits you best',
  },
  {
    title: 'Payment',
    text: 'Double-check all the entered details, select your preferred payment method, and securely complete your booking',
  },
];

export default function Process() {
  return (
    <PrimarySection className="pt-10" id="process">
      <Container>
        <SectionTitle textAlign="center" subtitle="How it Works" mb="7">
          Simple, Hassle-Free Process
        </SectionTitle>

        <div className="flex flex-col gap-3.75 md:grid md:grid-cols-3 md:m-0 md:p-0">
          {steps.map((step, i) => (
            <div className="bg-gray-100 py-10 px-7.5 rounded-lg" key={i}>
              <div className="w-10 h-10 bg-primary-500 text-white text-lg font-medium mx-auto flex items-center justify-center rounded-4xl">
                {i + 1}
              </div>
              <h3 className="text-[18px] font-[600] font-merriweather text-center mt-5 mb-2.5 p-0 capitalize">
                {step.title}
              </h3>
              <p className="text-[16.5px] font-[300] text-center">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
