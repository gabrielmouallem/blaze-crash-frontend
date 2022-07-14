import styled from '@emotion/styled';

const Container = styled.div`
  width: 205px;
  height: 70px;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => (props.green ? 'rgb(96, 209, 132)' : 'rgb(53, 61, 74)')};
  background-color: ${props => (props.green ? 'rgb(96, 209, 132)' : 'rgb(53, 61, 74)')};
  color: ${props => (props.green ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)')};
  font-weight: bold;
  border: 1px solid rgba(0,0,0,0.1);
  box-sizing: border-box;
`;

const Date = styled.div`
  opacity: 0.8;
  font-size: 0.75rem;
`;

const CrashCard = {
  Container,
  Date,
}

export default CrashCard;