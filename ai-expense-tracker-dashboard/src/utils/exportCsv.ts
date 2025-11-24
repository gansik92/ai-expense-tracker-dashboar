export function exportToCSV(expenses: any[]) {
  const header = "name,amount,date\n";
  const rows = expenses
    .map((e) => `${e.name},${e.amount},${e.date}`)
    .join("\n");

  const data = header + rows;
  const blob = new Blob([data], { type: "text/csv" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "expenses_report.csv";
  a.click();
}