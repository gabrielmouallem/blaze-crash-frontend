import styled from '@emotion/styled';
import {motion} from 'framer-motion'

const Container = styled(motion.div)`
  position: relative;
  cursor: pointer;
  width: 100px;
  border-radius: 10px;
  margin: 0.75rem 0.25rem;
  padding: 1rem;
  background-color: ${props => props.colors.background};
  color: ${props => props.colors.text};
  font-weight: bold;
  border: 1px solid rgb(17, 25, 34);
  box-sizing: border-box;
  text-align: center;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Id = styled.div`
  position: absolute;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 55px;
  text-align: center;
  background-color: rgb(28, 36, 44);
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 0.7rem;
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