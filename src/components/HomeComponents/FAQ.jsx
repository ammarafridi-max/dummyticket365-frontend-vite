import SectionTitle from '../SectionTitle';
import PrimarySection from '../PrimarySection';
import Container from '../Container';
import FAQAccordion from '../FAQAccordion';
import PrimaryLink from '../PrimaryLink';

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Common questions answered',
  faqs,
}) {
  return (
    <PrimarySection id="faq" className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle textAlign="center" subtitle={subtitle} mb="8">
          {title}
        </SectionTitle>
        {faqs.map((faq, i) => {
          while (i < 6) {
            return (
              <FAQAccordion key={i} question={faq.question}>
                {faq.answer}
              </FAQAccordion>
            );
          }
        })}
        <div className="flex items-center justify-center mt-10">
          <PrimaryLink size="small" to="/faq">
            Read More FAQs
          </PrimaryLink>
        </div>
      </Container>
    </PrimarySection>
  );
}
