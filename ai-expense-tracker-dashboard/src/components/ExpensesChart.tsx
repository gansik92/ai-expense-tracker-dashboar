// src/components/ExpensesChart.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface Expense {
  name: string;
  amount: number;
  date: string;
}

export default function ExpensesChart({ data }: { data: Expense[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-xl font-bold mb-4 text-center">📊 Динамика расходов</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
