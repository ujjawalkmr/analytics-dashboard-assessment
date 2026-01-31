export function evByYear(data) {
  const map = {};
  data.forEach(d => {
    const year = d["Model Year"];
    if (year) map[year] = (map[year] || 0) + 1;
  });

  return Object.entries(map)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year - b.year);
}

export function evByType(data) {
  const map = {};
  data.forEach(d => {
    const type = d["Electric Vehicle Type"];
    if (type) map[type] = (map[type] || 0) + 1;
  });
  return map;
}

export function evByManufacturer(data) {
  const map = {};
  data.forEach(d => {
    if (d.Make) map[d.Make] = (map[d.Make] || 0) + 1;
  });

  return Object.entries(map)
    .map(([make, count]) => ({ make, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

export function evByCAFV(data) {
  const map = {};
  data.forEach(d => {
    const status = d["Clean Alternative Fuel Vehicle (CAFV) Eligibility"];
    if (status) map[status] = (map[status] || 0) + 1;
  });
  return map;
}

export function averageRange(data) {
  const ranges = data
    .map(d => Number(d["Electric Range"]))
    .filter(v => v > 0);

  const total = ranges.reduce((a, b) => a + b, 0);
  return ranges.length ? Math.round(total / ranges.length) : 0;
}
