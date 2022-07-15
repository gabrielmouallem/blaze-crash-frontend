import styled from '@emotion/styled';

const Container = styled.div`
  h1 {
    margin-left: 1rem;
  }
`;

const FormWrapper = styled.div`
  margin: 1rem 1rem 3rem 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Page = {
  Container,
  FormWrapper,
  Flex,
};

export default Page;