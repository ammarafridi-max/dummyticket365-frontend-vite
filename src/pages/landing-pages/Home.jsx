import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { faqArray, formatFaqArray } from '../../data/faqs';
import { HiCheck, HiOutlineClock, HiOutlineCurrencyDollar } from 'react-icons/hi2';
import TicketForm from '../../components/TicketForm'
import Hero from '../../components/Sections/Hero';
const Process = lazy(() => import('../../components/Sections/Process'));
const About = lazy(() => import('../../components/Sections/About'));
const Benefits = lazy(() => import('../../components/Sections/Benefits'));
const Testimonials = lazy(() => import('../../components/Sections/Testimonials'));
const FAQ = lazy(() => import('../../components/Sections/FAQ'));
const Contact = lazy(() => import('../../components/Sections/Contact'));

const keyword = 'dummy ticket';

const benefits = [
  {
    title: 'Airline-Verifiable PNR',
    text: 'Every dummy ticket includes a valid PNR that can be verified directly on airline websites, making it suitable for onward travel and airline or immigration checks.',
    icon: HiCheck,
  },
  {
    title: 'Instant Email Delivery',
    text: 'Our automated system delivers your dummy ticket to your email within minutes, so you are ready for airline check-in or border verification without delays.',
    icon: HiOutlineClock,
  },
  {
    title: 'Affordable & Transparent Pricing',
    text: 'We offer competitively priced dummy tickets with no hidden fees, providing a reliable solution for travelers who need proof of onward travel.',
    icon: HiOutlineCurrencyDollar,
  },
];

const testimonials = [
  {
    title: 'Stress-Free',
    name: 'David S.',
    img: '/david.webp',
    text: 'The process was quick and straightforward. I received my dummy ticket within minutes, and the PNR was fully verifiable on the airline website. It worked exactly as expected for my onward travel requirement.',
    purpose: 'Traveler – Used dummy ticket for onward travel verification',
  },
  {
    title: 'Dependable',
    name: 'Maria K.',
    img: '/maria.webp',
    text: 'I needed proof of onward travel on short notice and this service delivered instantly. The flight itinerary looked professional, the details were accurate, and everything checked out with the airline.',
    purpose: 'Tourist – Used dummy flight itinerary for airline check-in',
  },
  {
    title: 'Super Fast',
    name: 'Ahmed R.',
    img: '/ahmed.webp',
    text: 'Booking was simple and the dummy ticket arrived by email almost immediately. The PNR was valid and easy to verify, which made my travel process stress-free.',
    purpose: 'International Traveler – Used dummy ticket for immigration check',
  },
];

const pageData = {
  meta: {
    title: 'Dummy Ticket for Onward Travel from USD 13 | Instant & Verifiable',
    description:
      'Book a dummy ticket for onward travel with a verifiable PNR. Ideal for airline check-in and immigration checks. Instant email delivery. Starting from USD 13.',
    canonical: 'https://www.dummyticket365.com',
  },
  sections: {
    hero: {
      title: 'Dummy Ticket For Visas & Onward Travel From $13',
      subtitle:
        'Get a verifiable dummy ticket for visa applications, onward travel and immigration checks. Includes a valid PNR that works for airlines and border control.',
      form: <TicketForm />
    },
    process: {
      title: 'Get Your Dummy Ticket in 3 Simple Steps',
      subtitle:
        'Learn how to book a dummy ticket in minutes, using real airline itineraries and a verifiable PNR delivered instantly to your email.',
      keyword,
    },
    about: {
      title: 'About Us',
      text: 'We are an international travel services provider offering verifiable flight reservations and related travel documentation for travelers worldwide. Our services are used by thousands of customers each year for onward travel, immigration checks, and airline requirements. All reservations follow accepted airline formats and include a valid PNR code for verification',
      keyword,
    },
    benefits: {
      title: 'Why Choose Our Dummy Flight Tickets?',
      subtitle: 'Trusted by travelers worldwide for onward travel',
      benefits,
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What travelers around the world say about our dummy ticket service',
      testimonials,
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions answered',
      faqs: formatFaqArray(faqArray, keyword),
    },
  },
};

export default function Home() {
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
          text={pageData.sections['benefits'].text}
          benefits={pageData.sections['benefits'].benefits}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials
          title={pageData.sections['testimonials'].title}
          text={pageData.sections['testimonials'].text}
          testimonials={pageData.sections['testimonials'].testimonials}
        />
      </Suspense>
      <Suspense fallback={null}>
        <FAQ
          title={pageData.sections['faqs'].title}
          text={pageData.sections['faqs'].text}
          faqs={pageData.sections['faqs'].faqs}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
