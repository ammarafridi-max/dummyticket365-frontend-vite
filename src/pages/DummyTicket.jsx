import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/HomeComponents/Hero';
import Process from '../components/HomeComponents/Process';
import About from '../components/HomeComponents/About';
import Benefits from '../components/HomeComponents/Benefits';
import Testimonials from '../components/HomeComponents/Testimonials';
import FAQ from '../components/HomeComponents/FAQ';
import Contact from '../components/HomeComponents/Contact';

export default function DummyTicket() {
  const canonical =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5173/dummy-ticket'
      : 'https://www.dummyticket365.com/dummy-ticket';

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Dummy Ticket From USD 13 | Instant, Verifiable, & Affordable
        </title>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Travelers use dummy tickets for travel purposes, such as to show as proof of onward travel at airports. Book yours with us now. Starting from USD 13."
        />
      </Helmet>
      <Hero
        title="Dummy Ticket from USD 13. Verifiable and Legit."
        subtitle="Book your dummy ticket for all kinds of purposes instantly. All dummy tickets come with a PNR code that can be verified directly on airline websites."
      />
      <Process
        title="Your Dummy Ticket in 3 Easy Steps"
        subtitle="How To Book Your Dummy Ticket"
      />
      <About />
      <Benefits keyword="dummy ticket" />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
