// 📌 src/utils/insights.ts

export function getCategoryInsights(expenses: any[]) {
  if (!expenses.length) return "Нет данных для анализа.";

  const categories: Record<string, number> = {};

  // Считаем расходы по каждой категории
  expenses.forEach((exp) => {
    const name = exp.name || "Без категории";
    const amount = Number(exp.amount || 0);
    categories[name] = (categories[name] || 0) + amount;
  });

  let message = "📌 Советы по категориям:\n\n";

  for (const [cat, total] of Object.entries(categories)) {
    message += `• ${cat}: $${total}\n`;

    if (total > 200) {
      message += `  ⚠ Слишком высокий расход! Попробуй снизить.\n`;
    } else if (total < 50) {
      message += `  👍 Хороший контроль над категорией.\n`;
    }
    message += "\n";
  }

  return message;
}
