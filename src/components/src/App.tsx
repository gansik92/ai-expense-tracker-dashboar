import React from "react";
import UploadArea from "./components/UploadArea";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Expense Tracker Dashboard</h1>
      <UploadArea />
    </div>
  );
};

export default App;
