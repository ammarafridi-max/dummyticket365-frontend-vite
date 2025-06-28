import '@fontsource-variable/nunito';
import '@fontsource/merriweather';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer, Zoom } from 'react-toastify';
import Layout from './components/Layout';
import BookingLayout from './components/BookingLayout';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import FAQ from './pages/FAQ/FAQ';
import SelectFlights from './pages/SelectFlights/SelectFlights';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';

function App() {
  return (
    <HelmetProvider>
      <ToastContainer transition={Zoom} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="booking" element={<BookingLayout />}>
              <Route path="select-flights" element={<SelectFlights />} />
              <Route path="review-details" element={<ReviewDetails />} />
            </Route>
            <Route path="payment-successful" element={<PaymentSuccess />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
