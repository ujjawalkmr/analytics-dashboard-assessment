import "../styles/table.css";

export default function EVTable({ data }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Type</th>
            <th>Range (mi)</th>
            <th>City</th>
            <th>Utility</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 12).map((d, i) => (
            <tr key={i}>
              <td>{d.Make}</td>
              <td>{d.Model}</td>
              <td>{d["Model Year"]}</td>
              <td>{d["Electric Vehicle Type"]}</td>
              <td>{d["Electric Range"]}</td>
              <td>{d.City}</td>
              <td>{d["Electric Utility"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
