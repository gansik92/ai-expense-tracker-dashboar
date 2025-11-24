import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportToPDF(expenses: any[]) {
  const doc = new jsPDF();
  doc.text("AI Expense Report", 14, 15);

  doc.autoTable({
    head: [["Название", "Сумма", "Дата"]],
    body: expenses.map((e) => [e.name, e.amount, e.date]),
  });

  doc.save("expenses_report.pdf");
}