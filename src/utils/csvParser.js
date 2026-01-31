import Papa from "papaparse";

export async function loadCSV() {
  const response = await fetch("/ev_population.csv");
  const text = await response.text();

  return new Promise((resolve) => {
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => resolve(result.data),
    });
  });
}
