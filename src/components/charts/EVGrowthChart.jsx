import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function EVGrowthChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map(d => d.year),
        datasets: [{
          label: "EV Count",
          data: data.map(d => d.count),
        }]
      }}
    />
  );
}
