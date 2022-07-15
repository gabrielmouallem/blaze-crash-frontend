import React  from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes } = useCrashes();

  return (
    <Page.Container>
      <h1>Blaze Crash</h1>
      <Page.Flex>
        {!crashes?.length && (<Loader />)}
        {crashes?.map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={crashes?.length - index} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
