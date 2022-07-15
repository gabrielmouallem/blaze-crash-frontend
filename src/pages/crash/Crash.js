import React  from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes, length } = useCrashes();

  return (
    <Page.Container key={`${length}_CrashesPage`}>
      <h1>Blaze Crash</h1>
      <Page.Flex>
        {!length && (<Loader />)}
        {crashes.slice(0, 500).map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={length - index} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
