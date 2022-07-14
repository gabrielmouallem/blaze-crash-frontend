import React from "react";
import CrashCard from "./Card.styles";

export default function Card(props) {
  const { date: _date, value } = props.data;

  const { id } = props;

  console.log({ props });

  const date = new Date(_date).toLocaleString();

  return (
    <CrashCard.Container green={value >= 2}>
      <CrashCard.Id>{id}</CrashCard.Id>
      <CrashCard.Date>{date.toLocaleString()}</CrashCard.Date>
      <div>{value}X</div>
    </CrashCard.Container>
  );
}
