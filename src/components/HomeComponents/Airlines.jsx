import PrimarySection from '../PrimarySection';
import Container from '../Container';
import styled from 'styled-components';

const airlines = [
  {
    name: 'We provide Emirates dummy tickets',
    src: '/EK.png',
  },
  {
    name: 'We provide Etihad dummy tickets',
    src: '/EY.png',
  },
  {
    name: 'We provide Air France dummy tickets',
    src: '/AF.png',
  },
  {
    name: 'We provide KLM Airline dummy tickets',
    src: '/KL.jpg',
  },
  {
    name: 'We provide Swiss Air dummy tickets',
    src: '/LX.png',
  },
  {
    name: 'We provide Qatar Airways dummy tickets',
    src: '/QR.png',
  },
  {
    name: 'We provide Singapore Airways dummy tickets',
    src: '/SQ.png',
  },
  {
    name: 'We provide Turkish Airlines dummy tickets',
    src: '/TK.png',
  },
  // {
  //   name: 'Oman Air',
  //   src: '/WY.png',
  // },
];

const AirlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 50px;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: fit-content;
    filter: grayscale(1) opacity(0.7);
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 25px;
  }
`;

export default function Airlines() {
  return (
    <PrimarySection
      backgroundColor="var(--grey-color-100)"
      py="50px"
      mb="100px"
    >
      <Container>
        {/* <SectionTitle
          mb="30px"
          subtitle="Multiple choices, great flexibility"
          textAlign="center"
        >
          Airlines We Serve
        </SectionTitle> */}
        <AirlineContainer>
          {airlines.map((airline) => (
            <img src={airline.src} alt={airline.name} />
          ))}
        </AirlineContainer>
      </Container>
    </PrimarySection>
  );
}
