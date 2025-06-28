import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Process from './Process';
import About from './About';
import FAQ from './FAQ';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function Home() {
  const canonical =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5173'
      : 'https://www.mydummyticket.ae';

  return (
    <>
      <Helmet>
        <title>Dummy Ticket 365 | Verifiable Dummy Tickets From USD 12</title>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Dummy tickets are flight reservations travelers use for various purposes, including visa applications. Book yours with My Dummy Ticket. Starting from AED 49."
        />
      </Helmet>
      <Hero />
      <Process />
      <About />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
