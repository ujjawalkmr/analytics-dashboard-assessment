import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function ManufacturerChart({ data }) {
  return (
    <Bar
      data={{
        labels: data.map(d => d.make),
        datasets: [{
          label: "EV Count",
          data: data.map(d => d.count),
        }]
      }}
    />
  );
}
