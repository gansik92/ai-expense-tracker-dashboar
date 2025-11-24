// src/components/UploadArea.tsx
import { useState } from "react";
import Papa from "papaparse"; // 👈 нужна библиотека

interface UploadAreaProps {
  onDataParsed: (data: any[]) => void; // 👈 передача данных наверх
}

const UploadArea: React.FC<UploadAreaProps> = ({ onDataParsed }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        onDataParsed(results.data); // 👈 ВАЖНО — передаём данные наверх!
      },
    });
  };

  return (
    <div className="border-2 border-dashed p-6 rounded-xl bg-white shadow-md mb-6 text-center">
      <p className="text-gray-600 mb-2">
        Перетащи CSV-файл сюда или выбери файл 👇
      </p>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {fileName && <p className="mt-2 text-sm text-gray-500">Загружен файл: {fileName}</p>}
    </div>
  );
};

export default UploadArea;
