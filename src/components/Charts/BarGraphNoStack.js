import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarGraphNoStack() {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5] },
        { data: [4, 3, 1, 5, 8] },
        { data: [4, 2, 5, 4, 1] },
        { data: [2, 8, 1, 3, 1] },
        { data: [10, 6, 5, 8, 9] },
      ]}
      height={250}
    />
  );
}
