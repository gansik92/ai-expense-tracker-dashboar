// src/utils/forecast.ts

export function forecastNextMonth(expenses: any[]) {
  if (!expenses.length) return "Недостаточно данных для прогноза.";

  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const dailyAvg = total / expenses.length; // средний чек

  const forecast = dailyAvg * 30;

  return `📅 *Прогноз на следующий месяц*:
• Средний расход: $${dailyAvg.toFixed(2)} в день
• Ожидаемые расходы за месяц: **$${forecast.toFixed(2)}**
⚠️ Совет: если сократить траты на 10%, можно сэкономить **$${(forecast * 0.1).toFixed(2)}**!`;
}
