import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function VehicleTypeChart({ data }) {
  return (
    <Pie
      data={{
        labels: Object.keys(data),
        datasets: [{
          data: Object.values(data),
        }]
      }}
    />
  );
}
