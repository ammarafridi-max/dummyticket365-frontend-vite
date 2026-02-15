import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  buildFAQPage,
  buildGraph,
  buildOrganization,
  buildWebPage,
  buildWebsite,
} from '../../lib/schema';
import {
  HiCheckBadge,
  HiShieldCheck,
  HiOutlineCurrencyDollar,
  HiGlobeAlt,
  HiOutlineClock,
  HiArrowsRightLeft,
} from 'react-icons/hi2';
import Hero from '../../components/Sections/Hero';
import AllForms from '../../components/AllForms';
const Process = lazy(() => import('../../components/Sections/Process'));
const About = lazy(() => import('../../components/Sections/About'));
const Benefits = lazy(() => import('../../components/Sections/Benefits'));
const Testimonials = lazy(() => import('../../components/Sections/Testimonials'));
const FAQ = lazy(() => import('../../components/Sections/FAQ'));
const Contact = lazy(() => import('../../components/Sections/Contact'));
const BlogPosts = lazy(() => import('../../components/Sections/BlogPosts'));

const keyword = 'dummy ticket';

const benefits = [
  {
    title: 'Accepted for All Major Visa Types',
    text: 'Our dummy flight tickets are accepted by embassies and consulates for Schengen, UK, US, and other visa applications. Thousands of travelers use our service every year for tourist, student, business, and family visas.',
    icon: HiCheckBadge,
  },
  {
    title: 'Verifiable PNR & Embassy-Friendly',
    text: 'Every reservation includes a valid PNR that can be checked directly on airline systems. This makes your itinerary suitable for embassy review, airline checks, and immigration verification.',
    icon: HiShieldCheck,
  },
  {
    title: 'Cost-Effective Alternative',
    text: 'Why pay for an expensive airline ticket before your visa is approved? Our dummy flight reservations provide valid proof of travel at a fraction of the cost, helping you avoid fees and financial risk.',
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: 'Internationally Compliant Format',
    text: 'All itineraries follow standard airline reservation formats with accurate routes, dates, and airline details. This ensures your documents look professional and aligned with international travel standards.',
    icon: HiGlobeAlt,
  },
  {
    title: 'Fast Email Delivery',
    text: 'Short on time? Your dummy ticket is delivered quickly via email, making it ideal for last-minute visa appointments or urgent immigration requirements.',
    icon: HiOutlineClock,
  },
  {
    title: 'Flexibility for Changing Plans',
    text: 'If your travel plans change, that’s not an issue. Our dummy tickets let you plan ahead without being locked into non-refundable airfare, with updates available if needed.',
    icon: HiArrowsRightLeft,
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

const faqs = [
  {
    question: 'What is a dummy ticket?',
    answer:
      'A dummy ticket is a temporary flight reservation that shows your travel itinerary without purchasing a full airline ticket. It includes real airline details and a verifiable PNR, and is commonly used for visa applications and proof of onward travel.',
  },
  {
    question: 'How long is your dummy ticket valid for?',
    answer:
      'You can choose a validity of 48 hours, 7 days, or 14 days. The selected validity should match the period during which you need to present proof of onward travel.',
  },
  {
    question: 'Is it safe to use this service?',
    answer:
      'Yes. We use secure systems and accepted airline reservation formats to ensure your information and documents are handled safely and professionally.',
  },
  {
    question: 'Do embassies guarantee visa approval with a dummy ticket?',
    answer:
      'No travel document can guarantee visa approval. A dummy ticket is only one supporting document that shows your intended travel plans, which many embassies request as part of the visa application process.',
  },
  {
    question: 'How much does a dummy ticket cost?',
    answer:
      'Our pricing is affordable, with dummy ticket prices starting from USD 13. The final cost may vary based on itinerary type, selected validity, and availability at the time of booking.',
  },
  {
    question: 'Is a dummy ticket suitable for immigration checks?',
    answer:
      'A dummy ticket is commonly used when immigration officers request proof of onward travel. However, final acceptance is always at the discretion of immigration authorities.',
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
      title: 'Dummy Tickets for Visa, Onward Travel From $13',
      subtitle:
        'Reserve your dummy flight ticket in minutes with us. Get a verifiable ticket with a valid PNR that works for visa applications, onward travel, and immigration checks. Whether you’re applying for a visa, or need proof of onward travel, we make the process fast, simple, and cost-effective.',
      form: <AllForms />,
    },
    process: {
      title: 'Get Your Dummy Ticket in 3 Simple Steps',
      subtitle:
        'Here is how you can book a dummy ticket for visa application in minutes with authentic airline itinerary details and a verifiable PNR for a hassle-free experience.',
      keyword,
    },
    about: {
      title: 'About Us',
      text: 'We are a trusted international travel services provider offering verifiable flight reservations and essential travel documentation for travelers worldwide. Each year, thousands of customers rely on our verifiable PNR dummy ticket services to meet travel requirements, onward tickets for immigration checks, airline policies, and visa application needs. You can expect:',
      keyword,
    },
    benefits: {
      title: 'Why Choose DummyTicket365 for Reliable Flight Reservations?',
      subtitle:
        'Our flight reservation service makes your visa application process easier by focusing on accuracy, speed, and global acceptance so that you can submit your travel documents with confidence.',
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
      faqs: faqs,
    },
    blogs: {
      title: 'Blog Posts',
      subtitle: 'Recently published blog posts',
    },
  },
};

export default function Home() {
  const schema = buildGraph([
    buildOrganization(),
    buildWebsite(),
    buildWebPage({
      canonical: pageData.meta.canonical,
      title: pageData.meta.title,
      description: pageData.meta.description,
    }),
    buildFAQPage({
      canonical: pageData.meta.canonical,
      title: 'Frequently Asked Questions',
      description: pageData.meta.description,
      faqs: pageData.sections.faqs.faqs,
    }),
  ]);

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <link rel="canonical" href={pageData.meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={pageData.meta.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero
        title={pageData.sections.hero.title}
        subtitle={pageData.sections.hero.subtitle}
        form={pageData.sections.hero.form}
      />
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
        <BlogPosts
          title={pageData.sections['blogs'].title}
          subtitle={pageData.sections['blogs'].subtitle}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
