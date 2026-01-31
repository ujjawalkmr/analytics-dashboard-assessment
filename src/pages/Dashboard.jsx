import { useEffect, useState } from "react";
import { loadCSV } from "../utils/csvParser";
import {
  evByYear,
  evByType,
  evByManufacturer,
  evByCAFV,
  averageRange
} from "../utils/analytics";

import SummaryCard from "../components/SummaryCard";
import EVGrowthChart from "../components/charts/EVGrowthChart";
import VehicleTypeChart from "../components/charts/VehicleTypeChart";
import ManufacturerChart from "../components/charts/ManufacturerChart";
import CAFVChart from "../components/charts/CAFVChart";
import EVTable from "../components/EVTable";

import "../styles/dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadCSV().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h1>Electric Vehicle Population Analytics</h1>

      <div className="kpi-grid">
        <SummaryCard title="Total EVs" value={data.length} />
        <SummaryCard title="Manufacturers" value={new Set(data.map(d => d.Make)).size} />
        <SummaryCard title="Cities" value={new Set(data.map(d => d.City)).size} />
        <SummaryCard title="Avg Range (mi)" value={averageRange(data)} />
      </div>

      <div className="chart-grid">
        <EVGrowthChart data={evByYear(data)} />
        <VehicleTypeChart data={evByType(data)} />
        <ManufacturerChart data={evByManufacturer(data)} />
        <CAFVChart data={evByCAFV(data)} />
      </div>

      <EVTable data={data} />
    </div>
  );
}
