// src/components/ExpensesTable.tsx
interface Expense {
  name: string;
  amount: number;
  date: string;
}

export default function ExpensesTable({ data }: { data: Expense[] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2 text-center">Таблица расходов</h2>

      <table className="w-full border-collapse border border-gray-300 shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Название</th>
            <th className="border p-2">Сумма</th>
            <th className="border p-2">Дата</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{e.name || "—"}</td>
              <td className="border p-2">${e.amount}</td>
              <td className="border p-2">{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
