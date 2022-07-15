import styled from '@emotion/styled';

const Container = styled.div`
  h1 {
    margin-left: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Page = {
  Container,
  Flex,
};

export default Page;