import Container from '../Container';
import PrimarySection from '../PrimarySection';

export default function Hero({ title, subtitle, form, sectionId = 'form' }) {
  return (
    <PrimarySection className="bg-gray-50 py-7 md:pt-8 md:pb-15" id={sectionId}>
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-10">
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-[28px] md:text-[42px] leading-[1.2] font-medium font-outfit text-gray-900 mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[16px] md:text-[17px] text-gray-900/70 font-outfit font-light leading-7">
              {subtitle}
            </p>
          )}
        </div>

        <div className="w-full lg:w-[45%]">
          {form}
        </div>
      </Container>
    </PrimarySection>
  );
}
