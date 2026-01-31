import { Pie } from "react-chartjs-2";

export default function CAFVChart({ data }) {
  return (
    <Pie
      data={{
        labels: Object.keys(data),
        datasets: [{
          data: Object.values(data)
        }]
      }}
    />
  );
}
