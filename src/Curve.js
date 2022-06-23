import "./Curve.css";
import React from "react";
//import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
function Curve() {
  const data = {
    labels: ["mon", "tue", "wed", "thru", "fri", "sat", "sun"],
    datasets: [
      {
        data: [3, 1, 4, 5, 7, 4, 2],
        Color: ["yellow"],
        borderColor: ["rgba(0, 0, 0, 0.1)"],
        fill: {
          target: "origin",
          above: "#D1D100", // Area will be red above the origin
          below: "rgb(0, 0, 255)", // And blue below the origin
        },
      },
    ],
  };

  return (
    <div className="Curve">
      <Line data={data} width={200} height={40} />
    </div>
  );
}
export default Curve;
