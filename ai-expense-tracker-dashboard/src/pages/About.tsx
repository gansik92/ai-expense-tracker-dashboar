// src/pages/About.tsx
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">ℹ️ About This Project</h1>
        <p className="text-gray-700 mb-4">
          Это AI-система для анализа расходов, графиков и финансовых советов.
          Проект создан специально для собеседования.
        </p>

        <h2 className="text-xl font-bold mt-6">📦 Технологии</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>React + TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Recharts (графики)</li>
          <li>Локальный AI анализ</li>
          <li>PDF + Excel экспорт</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">🚀 Идеи для развития</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Авторизация (Google / Email)</li>
          <li>OpenAI API для AI анализа</li>
          <li>Firebase / Supabase</li>
          <li>Мобильная версия</li>
        </ul>
      </div>
    </div>
  );
}
