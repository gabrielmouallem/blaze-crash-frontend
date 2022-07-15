import React from "react";
import CrashCard from "./Card.styles";

function Card(props) {
  const { date: _date, value } = props.data;

  const { id, low } = props;

  const date = new Date(_date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  const styles = {
    text: "rgba(255,255,255,0.7)",
    background: "rgb(53, 61, 74)"
  }

  if (value >= 2) {
    styles.text = "rgba(0,0,0,0.7)";
    styles.background = "rgb(96, 209, 132)";
  } else if (value < 1.1 && low) {
    styles.text = "rgba(255,255,255,0.7)";
    styles.background = "rgb(221, 65, 81)";
  }

  return (
    <CrashCard.Container
      {...props.data?.motion}
      title={date}
      colors={styles}
    >
      <CrashCard.Id>{id}</CrashCard.Id>
      <CrashCard.Date>{date}</CrashCard.Date>
      <div>{value}X</div>
    </CrashCard.Container>
  );
}

export default React.memo(Card);