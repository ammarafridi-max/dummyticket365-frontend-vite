import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InsuranceProvider } from '../context/InsuranceContext';
import { TicketProvider } from '../context/TicketContext';
import ScrollToTop from '../components/ScrollToTop';

// Layout
import AppLayout from '../layouts/AppLayout';
import AppLayout2 from '../layouts/AppLayout2';
import BookingLayout from '../layouts/BookingLayout';

// Landing Pages
import Home from '../pages/landing-pages/Home';
import DummyTicketForSchengenVisa from '../pages/landing-pages/DummyTicketForSchengenVisa';
import OnwardTicket from '../pages/landing-pages/OnwardTicket';

// Booking Pages
import SelectFlights from '../pages/booking-pages/SelectFlights';
import ReviewDetails from '../pages/booking-pages/ReviewDetails';
import PaymentSuccess from '../pages/booking-pages/PaymentSuccess';

// Travel Insurance routes intentionally disabled (UAE residents only). Keep code for future revival.

// Legal Pages
import TermsAndConditions from '../pages/legal-pages/TermsAndConditions';
import PrivacyPolicy from '../pages/legal-pages/PrivacyPolicy';

// FAQ
import FAQ from '../pages/faq/FAQ';

// Blog
import BlogPost from '../pages/blog-pages/BlogPost';
import Blog from '../pages/blog-pages/Blog';

// Other Pages
import PageNotFound from '../pages/other/PageNotFound';
import DummyTicketForUKVisa from '../pages/landing-pages/DummyTicketForUKVisa';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <TicketProvider>
        <InsuranceProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="dummy-ticket-schengen-visa" element={<DummyTicketForSchengenVisa />} />
              <Route path="dummy-ticket-uk-visa" element={<DummyTicketForUKVisa />} />
              <Route path="onward-ticket" element={<OnwardTicket />} />
              {/* DT365: travel insurance routes disabled for now */}
              <Route path="*" element={<PageNotFound />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="payment-successful" element={<PaymentSuccess />} />
              <Route path="terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="booking" element={<BookingLayout />}>
                <Route path="select-flights" element={<SelectFlights />} />
                <Route path="review-details" element={<ReviewDetails />} />
              </Route>
              {/* DT365: travel insurance booking flow disabled for now */}
            </Route>
          </Routes>
        </InsuranceProvider>
      </TicketProvider>
    </BrowserRouter>
  );
}
