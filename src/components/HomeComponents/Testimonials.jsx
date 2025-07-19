import Container from '../Container';
import PrimarySection from '../PrimarySection';
import TestimonialCard from '../TestimonialCard';
import SectionTitle from '../SectionTitle';

const testimonials = [
  {
    title: 'Stress-Free',
    name: 'David S.',
    img: '/david.webp',
    text: 'Dummy Ticket 365 made my visa process incredibly smooth and stress-free. Their service is trustworthy and perfect for frequent travelers.',
  },
  {
    title: 'Dependable',
    name: 'Maria K.',
    img: '/maria.webp',
    text: 'Fast, dependable, and simple to book. Dummy Ticket 365 made travel paperwork effortless. I’ll definitely use them again and again!',
  },
  {
    title: 'Super Fast',
    name: 'Ahmed R.',
    img: '/ahmed.webp',
    text: 'Amazing experience! Received my dummy ticket within minutes—ideal for my Schengen visa. These guys really know what travelers need.',
  },
];

export default function Testimonials() {
  return (
    <PrimarySection className="pt-20">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="What our customers say about us"
          mb="8"
        >
          Testimonials
        </SectionTitle>
        <div className="flex flex-col md:flex-row gap-3.75">
          {testimonials.map((test, i) => (
            <TestimonialCard
              key={i}
              title={test.title}
              name={test.name}
              src={test.img}
            >
              {test.text}
            </TestimonialCard>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
