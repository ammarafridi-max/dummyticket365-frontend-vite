import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  height: 500px;
  padding: 30px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  -moz-box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 30px;
  }
`;

export default function FormLoading() {
  return <Container>Loading...</Container>;
}
