// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AI Expense Tracker
        </Link>

        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
}
