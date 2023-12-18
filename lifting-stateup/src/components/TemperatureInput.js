import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput(props) {
  console.log(props);
  const { temperature, scale, onTemperatureChange } = props;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleName[scale]}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={(event) => onTemperatureChange(event, scale)}
      />
    </fieldset>
  );
}
