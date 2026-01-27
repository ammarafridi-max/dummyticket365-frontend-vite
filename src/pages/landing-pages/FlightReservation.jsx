import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiCheck, HiOutlineClock, HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { faqArray, formatFaqArray } from '../../data/faqs';
import TicketForm from '../../components/TicketForm';
import Hero from '../../components/Sections/Hero';
const Process = lazy(() => import('../../components/Sections/Process'));
const About = lazy(() => import('../../components/Sections/About'));
const Benefits = lazy(() => import('../../components/Sections/Benefits'));
const Testimonials = lazy(() => import('../../components/Sections/Testimonials'));
const FAQ = lazy(() => import('../../components/Sections/FAQ'));
const Contact = lazy(() => import('../../components/Sections/Contact'));

const keyword = 'flight reservation';

const pageData = {
  meta: {
    title: 'Flight Reservation for Onward Travel & Immigration | From USD 13',
    description:
      'Book a verifiable flight reservation with a valid PNR for onward travel, airline check-in, and immigration checks. Instant email delivery. Starting from USD 13.',
    canonical: 'https://www.dummyticket365.com/flight-reservation',
  },
  sections: {
    hero: {
      title: 'Flight Reservation for Onward Travel & Immigration from $13',
      subtitle:
        'Get a genuine flight reservation with a verifiable PNR for airline check-in, onward travel, and immigration requirements. Delivered instantly by email.',
      form: <TicketForm />
    },
    process: {
      title: 'Book Your Flight Reservation in 3 Simple Steps',
      subtitle:
        'See how to generate a verifiable flight reservation using real airline itineraries, with instant email delivery and a valid PNR.',
      keyword,
    },
    about: {
      title: 'About Us',
      text: 'We provide international travelers with verifiable flight reservations designed for onward travel, airline verification, and immigration checks. Each reservation is created using real airline systems and includes a valid PNR that can be checked on airline websites, helping travelers meet travel requirements without purchasing a full airfare.',
      keyword,
    },
    benefits: {
      title: 'Why Choose Our Flight Reservation Service?',
      subtitle: 'Trusted by travelers worldwide for onward travel',
      benefits: [
        {
          title: 'Airline-Verifiable PNR',
          text: 'Every flight reservation includes a valid PNR that can be verified directly on airline websites, making it suitable for onward travel and airline or immigration checks.',
          icon: HiCheck,
        },
        {
          title: 'Instant Email Delivery',
          text: 'Your flight reservation is delivered to your email within minutes, so you are ready for airline check-in or border verification without unnecessary delays.',
          icon: HiOutlineClock,
        },
        {
          title: 'Affordable & Transparent Pricing',
          text: 'We offer competitively priced flight reservations with clear pricing and no hidden fees, providing a cost-effective solution for travelers who need proof of onward travel.',
          icon: HiOutlineCurrencyDollar,
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What travelers around the world say about our flight reservation service',
      testimonials: [
        {
          title: 'Smooth & Reliable',
          name: 'David S.',
          img: '/david.webp',
          text: 'The process was quick and straightforward. I received my flight reservation within minutes, and the PNR was fully verifiable on the airline website. It worked perfectly for my onward travel requirement.',
          purpose: 'Traveler – Used flight reservation for onward travel verification',
        },
        {
          title: 'Exactly What I Needed',
          name: 'Maria K.',
          img: '/maria.webp',
          text: 'I needed proof of onward travel on short notice and this service delivered instantly. The flight itinerary looked professional and everything checked out with the airline.',
          purpose: 'Tourist – Used flight reservation for airline check-in',
        },
        {
          title: 'Fast & Trustworthy',
          name: 'Ahmed R.',
          img: '/ahmed.webp',
          text: 'Booking was simple and the flight reservation arrived by email almost immediately. The PNR was valid and easy to verify, which made my travel process stress-free.',
          purpose: 'International Traveler – Used flight reservation for immigration check',
        },
      ],
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions answered',
      faqs: formatFaqArray(faqArray, keyword),
    },
    contact: {
      text: 'If you have questions about our flight reservation service or need help with your booking, feel free to contact us by email. Our support team is ready to assist you.',
    },
  },
};

export default function FlightReservation() {
  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <link rel="canonical" href={pageData.meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={pageData.meta.description} />
      </Helmet>
      <Hero title={pageData.sections['hero'].title} subtitle={pageData.sections['hero'].subtitle} form={pageData.sections['hero'].form}  />
      <Suspense fallback={null}>
        <Process
          title={pageData.sections['process'].title}
          subtitle={pageData.sections['process'].subtitle}
          keyword={pageData.sections['process'].keyword}
        />
      </Suspense>
      <Suspense fallback={null}>
        <About
          title={pageData.sections['about'].title}
          text={pageData.sections['about'].text}
          keyword={pageData.sections['about'].keyword}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Benefits
          title={pageData.sections['benefits'].title}
          subtitle={pageData.sections['benefits'].subtitle}
          benefits={pageData.sections['benefits'].benefits}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials
          title={pageData.sections['testimonials'].title}
          subtitle={pageData.sections['testimonials'].subtitle}
          testimonials={pageData.sections['testimonials'].testimonials}
        />
      </Suspense>
      <Suspense fallback={null}>
        <FAQ
          title={pageData.sections['faqs'].title}
          subtitle={pageData.sections['faqs'].subtitle}
          faqs={pageData.sections['faqs'].faqs}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Contact text={pageData.sections['contact'].text} />
      </Suspense>
    </>
  );
}
