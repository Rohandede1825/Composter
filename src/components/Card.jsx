// components/Card.jsx
import React from 'react';

export default function Card({ label, value, avg, icon, chartType }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          Avg {avg}
        </span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-lg font-semibold text-gray-800">{label}</div>
      <div className="text-2xl font-bold text-gray-700">{value}</div>

      {/* Placeholder for chart */}
      <div className="mt-4 bg-gray-100 h-24 rounded-md flex items-center justify-center text-gray-400 text-sm">
        {chartType} chart
      </div>
    </div>
  );
}
