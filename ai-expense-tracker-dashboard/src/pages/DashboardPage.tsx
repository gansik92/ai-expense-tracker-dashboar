// src/pages/DashboardPage.tsx

import { useState } from "react";
import UploadArea from "../components/UploadArea";
import ExpensesTable from "../components/ExpensesTable";
import SummaryCards from "../components/SummaryCards";
import ExpensesChart from "../components/ExpensesChart";
import Navbar from "../components/Navbar";

import { analyzeExpenses } from "../utils/aiAnalysis";  // Если нет API — заглушка
import { forecastNextMonth } from "../utils/forecast";
import { localAI } from "../utils/localAi";
import { getCategoryInsights } from "../utils/insights";
import { exportToCSV } from "../utils/exportCsv";
import { exportToPDF } from "../utils/exportPdf";

export default function DashboardPage() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [localAIResult, setLocalAIResult] = useState<string | null>(null);
  const [forecast, setForecast] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  // 📊 Статистика
  const total = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
  const maxExpense = expenses.length ? Math.max(...expenses.map((e) => Number(e.amount || 0))) : 0;
  const count = expenses.length;

  // 🤖 Анализ через OpenAI (если ключа нет — заглушка)
  const handleAIAnalysis = async () => {
    setAiLoading(true);
    setAiResult(null);
    try {
      const result = await analyzeExpenses(expenses);
      setAiResult(result);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          💰 AI Expense Tracker Dashboard
        </h1>

        {/* 📤 Загрузка CSV */}
        <UploadArea onDataParsed={setExpenses} />

        {/* Если есть данные — отображаем */}
        {expenses.length > 0 && (
          <>
            {/* 📌 Советы по категориям */}
            <button
              onClick={() => setLocalAIResult(getCategoryInsights(expenses))}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg w-full"
            >
              📌 Советы по категориям
            </button>

            {/* 📥 Скачать CSV */}
            <button
              onClick={() => exportToCSV(expenses)}
              className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg w-full"
            >
              📥 Скачать Excel (CSV)
            </button>

            {/* 📄 Скачать PDF */}
            <button
              onClick={() => exportToPDF(expenses)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full"
            >
              📄 Скачать PDF отчёт
            </button>

            {/* 📊 Карточки статистики */}
            <SummaryCards total={total} maxExpense={maxExpense} count={count} />

            {/* 📈 График */}
            <ExpensesChart data={expenses} />

            {/* 📋 Таблица */}
            <ExpensesTable data={expenses} />

            {/* ⚡ Локальный AI анализ */}
            <button
              onClick={() => setLocalAIResult(localAI(expenses))}
              className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg w-full"
            >
              ⚡ Локальный AI анализ (без API)
            </button>

            {localAIResult && (
              <div className="mt-4 p-4 bg-orange-100 rounded-lg shadow whitespace-pre-line">
                {localAIResult}
              </div>
            )}

            {/* 🤖 Анализ через API */}
            <button
              onClick={handleAIAnalysis}
              disabled={aiLoading}
              className="mt-6 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg w-full"
            >
              {aiLoading ? "Анализирую..." : "🤖 AI анализ расходов (API)"}
            </button>

            {aiResult && (
              <div className="mt-4 p-4 bg-yellow-100 rounded-lg shadow whitespace-pre-line">
                {aiResult}
              </div>
            )}

            {/* 🔮 Прогноз на месяц */}
            <button
              onClick={() => setForecast(forecastNextMonth(expenses))}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full"
            >
              🔮 Прогноз на месяц (локальный)
            </button>

            {forecast && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg shadow whitespace-pre-line">
                {forecast}
              </div>
            )}

          </>
        )}
      </div>
    </div>
  );
}
