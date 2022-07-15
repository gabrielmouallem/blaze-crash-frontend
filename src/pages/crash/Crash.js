import React, { useState } from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes: _crashes, length } = useCrashes();
  const [low, setLow] = useState(localStorage.getItem("low") === "true");

  const crashes = [..._crashes].slice(0, 500);

  const onForm = (data) => setLow(data.checked);

  return (
    <Page.Container key={`${length}_CrashesPage`}>
      <h1>Blaze Crash</h1>
      <Page.FormWrapper>
        <Form onForm={onForm} data={{low}} />
      </Page.FormWrapper>
      <Page.Flex>
        {!length && <Loader />}
        {crashes.map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={length - index} low={low} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
