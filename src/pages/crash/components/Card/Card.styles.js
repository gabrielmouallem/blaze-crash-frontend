import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 205px;
  height: 70px;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => (props.green ? 'rgb(96, 209, 132)' : 'rgb(53, 61, 74)')};
  background-color: ${props => (props.green ? 'rgb(96, 209, 132)' : 'rgb(53, 61, 74)')};
  color: ${props => (props.green ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)')};
  font-weight: bold;
  border: 1px solid rgb(17, 25, 34);
  box-sizing: border-box;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Id = styled.div`
  position: absolute;
  width: 60px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 57px;
  text-align: center;
  background-color: rgba(17, 25, 34);
  padding: 5px;
  border-radius: 5px;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
`;

const Date = styled.div`
  opacity: 0.8;
  font-size: 0.75rem;
`;

const CrashCard = {
  Container,
  Id,
  Date,
}

export default CrashCard;