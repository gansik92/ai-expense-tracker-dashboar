import React, { useState } from "react";

const UploadArea: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      console.log("File content:", reader.result); // CSV данные уже тут!
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: "20px", border: "1px dashed gray" }}>
      <h3>Upload CSV with expenses</h3>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
};

export default UploadArea;
