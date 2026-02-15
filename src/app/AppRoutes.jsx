import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InsuranceProvider } from '../context/InsuranceContext';
import { TicketProvider } from '../context/TicketContext';
import ScrollToTop from '../components/ScrollToTop';

// Layout
import AppLayout from '../layouts/AppLayout';
import BookingLayout from '../layouts/BookingLayout';

// Landing Pages
import Home from '../pages/landing-pages/Home';
const DummyTicketForSchengenVisa = lazy(
  () => import('../pages/landing-pages/DummyTicketForSchengenVisa')
);
const DummyTicketForUKVisa = lazy(() => import('../pages/landing-pages/DummyTicketForUKVisa'));
const OnwardTicket = lazy(() => import('../pages/landing-pages/OnwardTicket'));

// Booking Pages
const SelectFlights = lazy(() => import('../pages/booking-pages/SelectFlights'));
const ReviewDetails = lazy(() => import('../pages/booking-pages/ReviewDetails'));
const PaymentSuccess = lazy(() => import('../pages/booking-pages/PaymentSuccess'));

// Legal Pages
const TermsAndConditions = lazy(() => import('../pages/legal-pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('../pages/legal-pages/PrivacyPolicy'));

// FAQ
const FAQ = lazy(() => import('../pages/faq/FAQ'));

// Blog
const BlogPost = lazy(() => import('../pages/blog-pages/BlogPost'));
const Blog = lazy(() => import('../pages/blog-pages/Blog'));

// Other Pages
const PageNotFound = lazy(() => import('../pages/other/PageNotFound'));

function LazyRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <TicketProvider>
        <InsuranceProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route
                path="dummy-ticket-schengen-visa"
                element={
                  <LazyRoute>
                    <DummyTicketForSchengenVisa />
                  </LazyRoute>
                }
              />
              <Route
                path="dummy-ticket-uk-visa"
                element={
                  <LazyRoute>
                    <DummyTicketForUKVisa />
                  </LazyRoute>
                }
              />
              <Route
                path="onward-ticket"
                element={
                  <LazyRoute>
                    <OnwardTicket />
                  </LazyRoute>
                }
              />
              <Route
                path="*"
                element={
                  <LazyRoute>
                    <PageNotFound />
                  </LazyRoute>
                }
              />
              <Route
                path="faq"
                element={
                  <LazyRoute>
                    <FAQ />
                  </LazyRoute>
                }
              />
              <Route
                path="payment-successful"
                element={
                  <LazyRoute>
                    <PaymentSuccess />
                  </LazyRoute>
                }
              />
              <Route
                path="terms-and-conditions"
                element={
                  <LazyRoute>
                    <TermsAndConditions />
                  </LazyRoute>
                }
              />
              <Route
                path="privacy-policy"
                element={
                  <LazyRoute>
                    <PrivacyPolicy />
                  </LazyRoute>
                }
              />
              <Route
                path="blog"
                element={
                  <LazyRoute>
                    <Blog />
                  </LazyRoute>
                }
              />
              <Route
                path="blog/:slug"
                element={
                  <LazyRoute>
                    <BlogPost />
                  </LazyRoute>
                }
              />
              <Route path="booking" element={<BookingLayout />}>
                <Route
                  path="select-flights"
                  element={
                    <LazyRoute>
                      <SelectFlights />
                    </LazyRoute>
                  }
                />
                <Route
                  path="review-details"
                  element={
                    <LazyRoute>
                      <ReviewDetails />
                    </LazyRoute>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </InsuranceProvider>
      </TicketProvider>
    </BrowserRouter>
  );
}
