import React, { useMemo, useState } from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Page from "./Crash.styles";

const MAX_CRASHES = 1000;
const COLORS = ["red", "green", "gray"];

const SHOW_RED_STATE = localStorage.getItem("low") === "true";

export default function CrashPage() {
  const { crashes, length, stats, startDate, endDate } = useCrashes();

  const [showRed, setShowRed] = useState(SHOW_RED_STATE);
  const [showColors, setShowColors] = useState(COLORS);

  const memoizedCrashes = useMemo(() => crashes.slice(0, MAX_CRASHES), [crashes]);

  const onForm = (data) => {
    setShowRed(data.showRed);
    setShowColors(data.showColors);
  };

  return (
    <Page.Container key={`${length}_CrashesPage`}>
      <h1>Blaze Crash</h1>
      <Page.FormWrapper>
        <Form onForm={onForm} data={{ showRed, showColors }} />
        <br></br>
        <br></br>
        <div>Total de verdes: {stats.green}</div>
        <div>Total de cinzas: {showRed ? stats.gray_no_red : stats.gray_with_red}</div>
        {showRed && <div>Total de vermelhos: {stats.red}</div>}
        <br></br>
        <div>Dados de {startDate} a {endDate}</div>
      </Page.FormWrapper>
      <Page.Flex>
        {!length && <Loader />}
        {memoizedCrashes.map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={length - index} showRed={showRed} showColors={showColors} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
