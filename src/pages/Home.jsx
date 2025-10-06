import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';
import Hero from '../components/HomeComponents/Hero';
import Process from '../components/HomeComponents/Process';
import About from '../components/HomeComponents/About';
import FAQ from '../components/HomeComponents/FAQ';
import Benefits from '../components/HomeComponents/Benefits';
import Testimonials from '../components/HomeComponents/Testimonials';
import Contact from '../components/HomeComponents/Contact';
import Airlines from '../components/HomeComponents/Airlines';

export default function Home() {
  const canonical =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5173'
      : 'https://www.dummyticket365.com';

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Flight Reservations From USD 12 | Instant, Verifiable, & Affordable
        </title>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Travelers use flight reservations for travel purposes, such as to show as proof of onward travel at airports. Book yours with us now. Starting from USD 13."
        />
      </Helmet>
      <Hero />
      <Process />
      <About />
      <Benefits keyword="flight reservation" />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
