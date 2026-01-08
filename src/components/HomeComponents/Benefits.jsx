import Container from '../Container';
import PrimarySection from '../PrimarySection';
import SectionTitle from '../SectionTitle';

export default function Benefits({
  title = 'Why Choose Our Dummy Flight Tickets?',
  subtitle = 'Trusted by travelers worldwide for onward travel',
  benefits,
}) {
  return (
    <PrimarySection className="pt-15 lg:pt-25" id="benefits">
      <Container>
        <SectionTitle textAlign="center" subtitle={subtitle} mb="7">
          {title}
        </SectionTitle>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
          {benefits.map((item, i) => {
            return (
              <div className="w-full md:mb-0 font-outfit" key={i}>
                <div className="w-10 h-10 flex items-center justify-center bg-white text-primary-500 border border-primary-500 text-md font-medium font-outfit rounded-full">
                  <item.icon />
                </div>
                <h3 className="text-[19px] lg:text-[20px] font-[400] capitalize my-4 p-0">
                  {item?.title}
                </h3>
                <p className="text-[16px] text-gray-900/70 font-light leading-6.5">{item?.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </PrimarySection>
  );
}
