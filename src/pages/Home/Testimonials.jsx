import styled from 'styled-components';
import Container from '../../components/Container';
import PrimarySection from '../../components/PrimarySection';
import TestimonialCard from '../../components/TestimonialCard';
import SectionTitle from '../../components/SectionTitle';

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

const Row = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default function Testimonials() {
  return (
    <PrimarySection pt="100px" pb="100px">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="What our customers say about us"
          mb="50px"
        >
          Testimonials
        </SectionTitle>
        <Row>
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
        </Row>
      </Container>
    </PrimarySection>
  );
}
