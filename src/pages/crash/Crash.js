import React  from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes: _crashes, length } = useCrashes();

  const crashes = [..._crashes].slice(0, 500);

  return (
    <Page.Container key={`${length}_CrashesPage`}>
      <h1>Blaze Crash</h1>
      <Page.Flex>
        {!length && (<Loader />)}
        {crashes.map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={length - index} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
