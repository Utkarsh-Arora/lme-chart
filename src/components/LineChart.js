// import React from "react";
// import { Line } from "react-chartjs-2";

// const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "First dataset",
//         data: [33, 53, 85, 41, 44, 65],
//         fill: true,
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)"
//       },
//       {
//         label: "Second dataset",
//         data: [33, 25, 35, 51, 54, 76],
//         fill: false,
//         borderColor: "#742774"
//       }
//     ]
//   };

// export default function LineChartCommodity() {
//   return <Line data={data} />;
// }

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "Nickel",
      data: [22326, 24178, 31860.65, 33298.42, 27950, 25837.5],
      borderColor: "#FFBF00",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Tin",
      data: [41807, 44117.75, 44248.91, 43121.58, 35944.76, 31776.75],
      borderColor: "#3DDC84	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Copper",
      data: [9775.93, 9941.35, 10237.59, 10183.13, 9362.81, 9033.13],
      borderColor: "#9C2542",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Cobalt",
      data: [70452.25, 71537.75, 80649.13, 81789.47, 77577.38, 72077.75],
      borderColor: "#FF91AF",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      label: "Aluminium",
      data: [3003.08, 3260.83, 3537.85, 3256.58, 2826.36, 2562.93],
      borderColor: "#0048BA",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Aluminium Alloy",
      data: [2354.3, 2608.8, 2848.83, 2596.42, 1960.48, 1801],
      borderColor: "#B0BF1A	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },

    {
      label: "Lead",
      data: [2342.7, 2299.9, 2359.48, 2396.74, 2145.17, 2067.38],
      borderColor: "#C46210	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Zinc",
      data: [3609.95, 3644.23, 3974.3, 4371.03, 3759.45, 3643.95],
      borderColor: "#B2BEB5	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Steel Rebar",
      data: [702.35, 741.66, 906.38, 939.75, 812.39, 704.67],
      borderColor: "#BCD4E6	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Steel Scrap",
      data: [530.6, 504.82, 641.91, 631.19, 494.13, 392.1],
      borderColor: "#000000	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Rubber",
      data: [1745, 1814, 1736, 1640, 1668, 1646],
      borderColor: "#8A2BE2	",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Pig Iron",
      data: [119.82, 120.36, 153, 142, 138.5, 122.5],
      borderColor: "#CD7F32",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function LineChartCommodity() {
  return (
    <div style={{ display: "flex", paddingLeft:"50px", paddingRight:"50px" }}>
      <div style={{ width: "50%" }}>
        <Line data={data1} />
      </div>
      <div style={{ width: "50%" }}>
        <Line data={data2} />
      </div>
    </div>
  );
}
