import PrimarySection from '../PrimarySection';
import Container from '../Container';
import SectionTitle from '../SectionTitle';
import PrimaryLink from '../PrimaryLink';

export default function Contact({
  title = 'Contact Us',
  subtitle = 'Have questions or need assistance?',
  text = 'If you have any questions about our dummy ticket service or need help with your booking, feel free to reach out to us by email. Our support team is here to assist you and will respond as quickly as possible.',
}) {
  return (
    <PrimarySection id="contact" className="mt-10 mb-15">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 md:p-12 rounded-2xl">
          <div className="w-full md:w-3/5 mb-8 md:mb-0">
            <SectionTitle className="mb-7 lg:mb-6">{title}</SectionTitle>
            <p className="text-base lg:text-lg font-nunito font-light text-gray-900/60">{text}</p>
            <PrimaryLink size="small" href="mailto:info@dummyticket365.com" className="mt-5">
              Send Us An Email
            </PrimaryLink>
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="/contact-img.webp"
              alt="Contact DT365 Now"
              className="w-full h-full object-cover rounded-[5px_50px_5px_50px]"
            />
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}
