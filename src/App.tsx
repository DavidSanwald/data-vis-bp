import { Chart } from "Chart";
import React from "react";
import "./App.css";
import rawData from "downloaded-logs.json";
const data = rawData as any[];

const width = 800;
const height = 600;

function App() {
  return (
    <div className="App">
      <Chart width={width} height={height} data={data} />
    </div>
  );
}

export { App };
