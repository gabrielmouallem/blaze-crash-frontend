import React from "react";
import CrashCard from "./Card.styles";

export default function Card(props) {
  const { date: _date, value } = props.data;

  const { id } = props;

  const date = new Date(_date).toLocaleString();

  return (
    <CrashCard.Container
      title={date}
      green={value >= 2}
    >
      <CrashCard.Id>{id}</CrashCard.Id>
      <CrashCard.Date>{date}</CrashCard.Date>
      <div>{value}X</div>
    </CrashCard.Container>
  );
}
