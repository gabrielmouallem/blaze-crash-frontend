import React, { useState } from "react";

export default function Form({ onForm = () => {}, data }) {
  const { showRed, showColors } = data;

  const onChangeLow = () => {
    localStorage.setItem("low", `${!showRed}`);
    onForm({
      showRed: !showRed,
      showColors
    });
  };

  const onChangeShow = (e) => {
    const index = showColors.indexOf(e.target.value);
    const colors = [...showColors];
    if (index > -1) {
      colors.splice(index, 1);
    } else {
      colors.push(e.target.value);
    }
    onForm({
      showRed: showRed,
      showColors: colors,
    });
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="low"
          name="low"
          value="low"
          checked={showRed}
          onChange={onChangeLow}
        />
        <label> Pintar de vermelho valores abaixo de 1.1X</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="green"
          name="green"
          value="green"
          checked={showColors?.includes("green")}
          onChange={onChangeShow}
        />
        <label> Mostrar valores verdes</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="gray"
          name="gray"
          value="gray"
          checked={showColors?.includes("gray")}
          onChange={onChangeShow}
        />
        <label> Mostrar valores cinzas</label>
      </div>
      {showRed && (
        <div>
          <input
            type="checkbox"
            id="red"
            name="red"
            value="red"
            checked={showColors?.includes("red")}
            onChange={onChangeShow}
          />
          <label> Mostrar valores vermelhos</label>
        </div>
      )}
    </>
  );
}
