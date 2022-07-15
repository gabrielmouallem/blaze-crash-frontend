import React, { useMemo } from "react";
import {
  GRAY_CARD_STYLE,
  GREEN_CARD_STYLE,
  RED_CARD_STYLE,
} from "../../../../constants/constants";
import CrashCard from "./Card.styles";

function Card(props) {
  const { date, value } = props.data;

  const { id, showRed, showColors } = props;

  const formattedDate = new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const styles = useMemo(() => {
    if (value >= 2) {
      return GREEN_CARD_STYLE;
    } else if (value < 1.1) {
      if (showRed) return RED_CARD_STYLE;
      return GRAY_CARD_STYLE;
    } else if (value >= 1.1 && value <= 2) {
      return GRAY_CARD_STYLE;
    }
  }, [value, showRed]);

  if (value >= 2) {
    if (!showColors.includes("green")) return <></>;
  } else if (value < 1.1) {
    if (showRed) {
      if (!showColors.includes("red")) return <></>;
    }
  } else if (value >= 1.1 && value <= 2) {
    if (!showColors.includes("gray")) return <></>;
  }

  return (
    <CrashCard.Container
      {...props.data?.motion}
      title={formattedDate}
      colors={styles}
    >
      <CrashCard.Id>{id}</CrashCard.Id>
      <CrashCard.Date>{formattedDate}</CrashCard.Date>
      <div>{value}X</div>
    </CrashCard.Container>
  );
}

export default React.memo(Card);
