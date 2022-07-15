import React, { useState } from "react";

export default function Form({ onForm = () => {}, data }) {
  const { low } = data;

  const onChange = () => {
    localStorage.setItem("low", `${!low}`);
    onForm({
      checked: !low,
    });
  };

  return (
    <>
      <input
        type="checkbox"
        id="low"
        name="low"
        value="low"
        checked={low}
        onChange={onChange}
      />
      <label> Pintar de vermelho valores abaixo de 1.1X</label>
    </>
  );
}
