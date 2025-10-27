import Container from '../Container';
import PrimarySection from '../PrimarySection';

export default function TrustBar() {
  return (
    <PrimarySection className="mt-10">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-center text-[14px] md:text-[15px] text-gray-700 font-medium font-outfit">
        <span>Trusted by 50,000+ Travelers Worldwide</span>
        <span className="hidden md:inline text-gray-300">•</span>
        <span>Embassy-Accepted PNRs</span>
        <span className="hidden md:inline text-gray-300">•</span>
        <span>Secure Payments via Stripe & PayPal</span>
        <span className="hidden md:inline text-gray-300">•</span>
        <span>Instant Email Delivery</span>
      </Container>
    </PrimarySection>
  );
}
