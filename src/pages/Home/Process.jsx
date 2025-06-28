import styled from 'styled-components';
import PrimarySection from '../../components/PrimarySection';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function Process() {
  return (
    <PrimarySection pt="50px" pb="100px" id="process">
      <Container>
        <SectionTitle textAlign="center" subtitle="How it Works" mb="50px">
          Simple, Hassle-Free Process
        </SectionTitle>
        <Row>
          <Card number={1} title="Route and dates">
            Enter your departure and arrival cities, select your travel dates,
            and begin filling out your booking information.
          </Card>
          <Card number={2} title="Select Flight">
            View the list of available flights based on your selected route and
            dates, then choose the option that suits you best.
          </Card>
          <Card number={3} title="Payment">
            Double-check all the entered details, select your preferred payment
            method, and securely complete your booking.
          </Card>
        </Row>
      </Container>
    </PrimarySection>
  );
}

const CardItem = styled.div`
  background-color: var(--grey-color-100);
  padding: 40px 30px;
  border-radius: 10px;
`;

const CardNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color-500);
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const CardTitle = styled.h3`
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0;
  text-transform: capitalize;
`;

const CardText = styled.p`
  text-align: center;
  font-size: 16.5px;
  font-weight: 300;
`;

function Card({ number, title, children }) {
  return (
    <CardItem>
      <CardNumber>{number}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardText>{children}</CardText>
    </CardItem>
  );
}
