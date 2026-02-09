import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HiOutlineCheckBadge,
  HiOutlineBanknotes,
  HiOutlineGlobeAlt,
  HiOutlineArrowsRightLeft,
  HiOutlineClock,
  HiOutlineCalendarDays,
} from 'react-icons/hi2';
import Hero from '../../components/Sections/Hero';
import AllForms from '../../components/AllForms';

const Process = lazy(() => import('../../components/Sections/Process'));
const About = lazy(() => import('../../components/Sections/About'));
const Benefits = lazy(() => import('../../components/Sections/Benefits'));
const FAQ = lazy(() => import('../../components/Sections/FAQ'));
const Contact = lazy(() => import('../../components/Sections/Contact'));

const benefits = [
  {
    title: 'Authentic Reservation Structure',
    text: 'Each flight reservation includes a real, checkable booking reference (PNR) generated through recognized reservation systems. During validity, embassies or visa centers can perform routine checks using this PNR.',
    icon: HiOutlineCheckBadge,
  },
  {
    title: 'Cost-Effective Starting at Just $13',
    text: 'Our dummy tickets start from $13, allowing applicants to meet UK visa requirements without purchasing a full-priced, non-refundable airline ticket.',
    icon: HiOutlineBanknotes,
  },
  {
    title: 'Wide Acceptance',
    text: 'Our flight reservation format is suitable for UK visa applications submitted worldwide and is commonly used for visitor, business, and study visas.',
    icon: HiOutlineGlobeAlt,
  },
  {
    title: 'Flexible Support',
    text: 'Visa processing times vary and travel plans change. Our service lets you submit a compliant itinerary now and finalize your actual booking later.',
    icon: HiOutlineArrowsRightLeft,
  },
  {
    title: 'Timely Delivery',
    text: 'After payment, your UK visa flight itinerary is delivered by email within minutes, ready for download or submission.',
    icon: HiOutlineClock,
  },
  {
    title: 'Selectable Validity',
    text: 'Choose a validity period such as 48 hours, 7 days, or 14 days to match your visa appointment or review timeline.',
    icon: HiOutlineCalendarDays,
  },
];

const faqs = [
  {
    question: 'Is a dummy ticket acceptable for UK visa applications?',
    answer:
      'UK visa applications generally require proof of travel plans rather than a paid ticket. Dummy flight reservations are commonly used for this purpose. Final acceptance depends on UK Visas and Immigration (UKVI).',
  },
  {
    question: 'Does the flight reservation include a verifiable PNR?',
    answer:
      'Yes. Each UK visa flight reservation includes a booking reference (PNR) that can be checked online during the selected validity period.',
  },
  {
    question: 'How long is the dummy ticket valid?',
    answer:
      'You can choose a validity of 48 hours, 7 days, or 14 days at the time of booking to match your visa submission timeline.',
  },
  {
    question: 'How much does a dummy ticket for a UK visa cost?',
    answer:
      'Pricing starts from $13 and may vary based on the selected validity and itinerary type.',
  },
  {
    question: 'Can I use this dummy ticket to board a flight?',
    answer:
      'No. Dummy tickets are for visa application purposes only. You must purchase a real airline ticket after your UK visa is approved.',
  },
];

const pageData = {
  meta: {
    title: 'Dummy Ticket for UK Visa From $13 | Verifiable PNR',
    description:
      'Secure a dummy ticket for UK visa applications with a verifiable PNR. Accepted for visa submissions and available from $13.',
    canonical: 'https://www.dummyticket365.com/dummy-ticket-uk-visa',
  },
  sections: {
    hero: {
      title: 'Book Your Dummy Ticket for UK Visa from $13',
      subtitle:
        'Secure a dummy ticket for UK visa applications with a verifiable PNR, without purchasing a fully paid airline ticket. Commonly used to show travel intent for UK visa submissions.',
      form: <AllForms />,
    },
    process: {
      title: 'How to Book Your Dummy Flight Ticket for a UK Visa',
      subtitle: 'Follow these three simple steps to get your visa flight reservation:',
    },
    about: {
      title: 'About Us',
      text: 'DummyTicket365 is an international travel documentation service supporting visa applicants worldwide. We provide visa-compliant travel documents that meet immigration expectations without requiring irreversible travel purchases. Our services are used for UK, Schengen, US, Canadian, and other visa applications.',
    },
    benefits: {
      title: 'Benefits of Our Dummy Ticket for UK Visa',
      subtitle: 'Applicants choose our UK visa dummy tickets for the following reasons:',
      benefits,
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions about dummy tickets for UK visas',
      faqs,
    },
    contact: {
      title: 'Questions About UK Visa Dummy Tickets?',
      text: 'With DummyTicket365, you can secure a flight reservation for a UK visa that meets application requirements. Our service is available 24/7, and our support team can assist with updates or document adjustments.',
    },
  },
};

export default function DummyTicketForUKVisa() {
  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <link rel="canonical" href={pageData.meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={pageData.meta.description} />
        <meta
          name="keywords"
          content="dummy ticket for uk visa, uk visa dummy ticket, dummy flight ticket for uk visa, uk visa flight reservation"
        />
      </Helmet>

      <Hero
        title={pageData.sections.hero.title}
        subtitle={pageData.sections.hero.subtitle}
        form={pageData.sections.hero.form}
      />

      <Suspense fallback={null}>
        <Process
          title={pageData.sections.process.title}
          subtitle={pageData.sections.process.subtitle}
        />
      </Suspense>

      <Suspense fallback={null}>
        <About title={pageData.sections.about.title} text={pageData.sections.about.text} />
      </Suspense>

      <Suspense fallback={null}>
        <Benefits
          title={pageData.sections.benefits.title}
          subtitle={pageData.sections.benefits.subtitle}
          benefits={pageData.sections.benefits.benefits}
        />
      </Suspense>

      <Suspense fallback={null}>
        <FAQ
          title={pageData.sections.faqs.title}
          subtitle={pageData.sections.faqs.subtitle}
          faqs={pageData.sections.faqs.faqs}
        />
      </Suspense>

      <Suspense fallback={null}>
        <Contact title={pageData.sections.contact.title} text={pageData.sections.contact.text} />
      </Suspense>
    </>
  );
}
