import { getTotalAmount, getCategoryBreakdown } from "../utils/helpers";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Summary({ expenses }) {
  const total = getTotalAmount(expenses);
  const breakdown = getCategoryBreakdown(expenses);

  const chartData = {
    labels: Object.keys(breakdown),
    datasets: [
      {
        data: Object.values(breakdown),
        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#10b981",
          "#ef4444",
          "#8b5cf6",
          "#ec4899",
          "#f97316",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
          color: "#1f2937",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 16,
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
        padding: 12,
        cornerRadius: 8,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-blue-100 via-white to-blue-50 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4 text-blue-800 animate-fade-in-down">
        Spending Summary
      </h2>
      <p className="text-center text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-6 sm:mb-8">
        Total Spent: <span className="text-blue-600 font-bold">Rs {total.toLocaleString()}</span>
      </p>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-64 sm:h-72 md:h-80 lg:h-96">
        <Pie data={chartData} options={chartOptions} />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(breakdown).map(([category, amount], index) => (
          <div
            key={category}
            className="flex items-center justify-between p-3 rounded-lg bg-white shadow-md hover:scale-105 transition-transform duration-200"
            style={{ borderLeft: `4px solid ${chartData.datasets[0].backgroundColor[index % chartData.datasets[0].backgroundColor.length]}` }}
          >
            <span className="text-sm sm:text-base font-medium text-gray-700 capitalize">{category}</span>
            <span className="text-sm sm:text-base font-semibold text-blue-600">Rs {amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}