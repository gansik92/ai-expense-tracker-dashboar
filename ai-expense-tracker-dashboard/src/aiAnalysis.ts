// src/utils/aiAnalysis.ts

export async function analyzeExpenses(expenses: any[]) {
  if (!expenses.length) return "Нет данных для анализа.";

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const max = Math.max(...expenses.map((e) => e.amount));
  const maxItem = expenses.find(e => e.amount === max);

  return `
💡 *AI Анализ расходов*:
• Общая сумма расходов: **$${total}**
• Самая дорогая покупка: **${maxItem?.name}** – $${max}
• Средний расход: **$${(total / expenses.length).toFixed(2)}**
• Сначала стоит оптимизировать расходы на **${maxItem?.name}**

📌 Совет: попробуй снизить эту трату хотя бы на 10% — это даст экономию $${(max * 0.1).toFixed(2)} в месяц!
  `;
}
