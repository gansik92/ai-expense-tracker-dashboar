interface Props {
  total: number;
  maxExpense: number;
  count: number;
}

export default function SummaryCards({ total, maxExpense, count }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="bg-white p-5 rounded-xl shadow-md border">
        <h2 className="text-gray-500 text-sm">Всего расходов</h2>
        <p className="text-3xl font-bold text-red-500">${total}</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md border">
        <h2 className="text-gray-500 text-sm">Самая дорогая покупка</h2>
        <p className="text-3xl font-bold text-blue-500">${maxExpense}</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md border">
        <h2 className="text-gray-500 text-sm">Количество транзакций</h2>
        <p className="text-3xl font-bold text-green-500">{count}</p>
      </div>
    </div>
  );
}
