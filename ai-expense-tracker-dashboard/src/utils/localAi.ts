// src/utils/localAi.ts

// Возможные категории
const categories = {
  food: ["еда", "продукты", "food", "grocery", "supermarket"],
  transport: ["такси", "транспорт", "bus", "metro", "uber"],
  entertainment: ["кино", "игра", "развлеч", "cinema", "game"],
  shopping: ["магазин", "покупка", "shopping", "store"],
  other: []
};

// Определяем категорию по названию
function detectCategory(name: string): string {
  name = name.toLowerCase();
  for (const [cat, keys] of Object.entries(categories)) {
    if (keys.some(k => name.includes(k))) return cat;
  }
  return "other";
}

export function localAI(expenses: any[]) {
  if (!expenses.length) return "Нет данных для анализа.";

  // 1. Добавим категорию каждому объекту
  expenses = expenses.map(e => ({
    ...e,
    category: detectCategory(e.name)
  }));

  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const max = Math.max(...expenses.map(e => e.amount));
  const avg = total / expenses.length;

  // 2. Считаем по категориям
  const stats: Record<string, number> = {};
  expenses.forEach(e => {
    stats[e.category] = (stats[e.category] || 0) + e.amount;
  });

  // 3. Ищем подозрительные траты
  const unusual = expenses.filter(e => e.amount > avg * 1.8);

  // 4. Формируем вывод 🎯
  let result = `🔍 Локальный анализ расходов (без API)\n\n`;
  result += `💰 Всего потрачено: $${total}\n`;
  result += `📊 Средний чек: $${avg.toFixed(2)}\n`;
  result += `⚡ Самая большая трата: $${max}\n\n`;

  result += `📂 Распределение по категориям:\n`;
  for (const [cat, sum] of Object.entries(stats)) {
    result += `  • ${cat}: $${sum}\n`;
  }

  if (unusual.length > 0) {
    result += `\n🚨 Подозрительные траты:\n`;
    unusual.forEach(e => {
      result += `  • ${e.name} — $${e.amount} (${e.date})\n`;
    });
  }

  result += `\n💡 Советы:\n`;
  result += `  • Определи лимиты по категориям\n`;
  result += `  • Ведите бюджет по неделям\n`;
  result += `  • Сократите траты по категории: ${Object.keys(stats).sort((a, b) => stats[b] - stats[a])[0]}\n`;

  return result;
}
