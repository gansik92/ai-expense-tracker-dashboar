import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </div>
  );
}