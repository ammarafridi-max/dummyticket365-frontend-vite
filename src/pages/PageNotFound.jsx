import PrimaryLink from '../components/PrimaryLink';
import Container from '../components/Container';
import PrimarySection from '../components/PrimarySection';

export default function PageNotFound() {
  return (
    <PrimarySection className="bg-gray-50 py-28 md:py-30 font-outfit">
      <Container>
        <div className="text-center space-y-6">
          {/* Error Code */}
          <h1 className="text-[72px] md:text-[96px] font-bold text-[#ff6b00] leading-none">404</h1>

          {/* Headline */}
          <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] text-gray-600 max-w-lg mx-auto font-light">
            The page you're looking for doesn’t exist or has been moved. Let’s get you back home
            safely.
          </p>

          {/* CTA */}
          <div className="pt-6">
            <PrimaryLink
              href="/"
              className="inline-block bg-[#ff6b00] text-white text-[16px] font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#e65e00] transition-all duration-300"
            >
              Go Back Home
            </PrimaryLink>
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}
