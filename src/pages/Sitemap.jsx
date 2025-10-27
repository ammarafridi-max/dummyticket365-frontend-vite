import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import PrimarySection from '../components/PrimarySection';

export default function Sitemap() {
  return (
    // Make sure PrimarySection fills full width
    <PrimarySection className="bg-gray-100 py-20 w-full overflow-x-hidden">
      <Container>
        <PageTitle>Sitemap</PageTitle>

        <ul className="mt-6 font-outfit list-disc list-inside text-gray-800 space-y-3 text-[16px]">
          <li>
            <strong>Home</strong> —{' '}
            <a href="https://www.dummyticket365.com" className="text-[#ff6b00] hover:underline">
              https://www.dummyticket365.com
            </a>
          </li>
          <li>
            <strong>Flight Reservation</strong> —{' '}
            <a
              href="https://www.dummyticket365.com/flight-reservation"
              className="text-[#ff6b00] hover:underline"
            >
              https://www.dummyticket365.com
            </a>
          </li>
          <li>
            <strong>Dummy Ticket</strong> —{' '}
            <a
              href="https://www.dummyticket365.com/dummy-ticket"
              className="text-[#ff6b00] hover:underline"
            >
              https://www.dummyticket365.com/dummy-ticket
            </a>
          </li>
          <li>
            <strong>Frequently Asked Questions</strong> —{' '}
            <a href="https://www.dummyticket365.com/faq" className="text-[#ff6b00] hover:underline">
              https://www.dummyticket365.com/faq
            </a>
          </li>
          <li>
            <strong>Terms and Conditions</strong> —{' '}
            <a
              href="https://www.dummyticket365.com/terms-and-conditions"
              className="text-[#ff6b00] hover:underline"
            >
              https://www.dummyticket365.com/terms-and-conditions
            </a>
          </li>
          <li>
            <strong>Privacy Policy</strong> —{' '}
            <a
              href="https://www.dummyticket365.com/privacy-policy"
              className="text-[#ff6b00] hover:underline"
            >
              https://www.dummyticket365.com/privacy-policy
            </a>
          </li>
        </ul>
      </Container>
    </PrimarySection>
  );
}
