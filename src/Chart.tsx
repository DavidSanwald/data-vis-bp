import { Group } from "Group";
import React from "react";
import { scaleLinear, line, scaleTime } from "d3";

const margin = { left: 32, right: 32, top: 32, bottom: 32 };

type Props = {
  width: number;
  height: number;
  data: any;
};
function pluck<T, K extends keyof T>(o: T, key: K) {
  return o[key];
}

type Datum = { created: number };
function getRange(list: number[]) {
  const min = list.reduce((acc, curr) => Math.min(acc, curr), Infinity);
  const max = list.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
  return [min, max];
}

function Chart({ width: outerWidth, height: outerHeight, data }: Props) {
  const width = outerWidth - (margin.left + margin.right);
  const height = outerHeight - (margin.top + margin.bottom);
  const xAcc = (datum: Datum) => pluck(datum, "date");
  const yAcc = (datum: Datum) => pluck(datum, "value");
  const yScale = scaleLinear()
    .domain(getRange(data.map(yAcc)))
    .range([height, 0]);
  const xScale = scaleTime()
    .domain([data[0], data[data.length - 1]].map(xAcc))
    .range([0, width]);
  const lineGen = line<Datum>()
    .x((d) => xScale(xAcc(d)))
    .y((d) => yScale(yAcc(d)));

  return (
    <svg width={outerWidth} height={outerHeight}>
      <Group top={margin.top} left={margin.left}></Group>
    </svg>
  );
}

export { Chart };
