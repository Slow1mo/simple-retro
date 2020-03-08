import React from "react";
import { Typography, Slider } from "@material-ui/core";

function valuetext(value: number) {
  return `${value} kakor`;
}

export const First = () => {
  const [value, setValue] = React.useState<number | number[]>(7);

  const handleChange = (_event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography id="discrete-slider" gutterBottom>
        generellt betyg
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </>
  );
};
