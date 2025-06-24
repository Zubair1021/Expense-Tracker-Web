import React from "react";
import CpuArchitecture from "@/components/ui/CpuArchitecture"; 

export default function Feature() {
  const features = [
    {
      title: "Dynamic Expense Management",
      description: "Add, edit, or delete expenses seamlessly with real-time updates.",
      highlight: "Add / Edit / Delete",
      color: "blue-500",
    },
    {
      title: "Local Storage",
      description: "All your expense data is securely stored in localStorage.",
      highlight: "in localStorage",
      color: "green-500",
    },
    {
      title: "Real-Time Summary",
      description: "Instantly view your expense totals with dynamic calculations.",
      highlight: "expense summary",
      color: "yellow-400",
    },
    {
      title: "Toast Notifications",
      description: "Receive instant feedback with stylish toast notifications.",
      highlight: "Toast notifications",
      color: "pink-500",
    },
    {
      title: "Glassmorphism Navbar",
      description: "Navigate with a modern, responsive glassmorphism-style navbar.",
      highlight: "Glassmorphism",
      color: "cyan-400",
    },
    {
      title: "Fully Responsive",
      description: "Enjoy a seamless experience across all devices and screen sizes.",
      highlight: "Fully responsive design",
      color: "purple-400",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-white flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">


      {/* Centered CPU Animation */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mb-12 sm:mb-16">
        <CpuArchitecture />
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white mb-6 sm:mb-8 underline underline-offset-4">
          What makes this app powerful
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-${feature.color} rounded-l-2xl`}></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {feature.description.replace(
                  feature.highlight,
                  `<span class="font-medium text-${feature.color}">${feature.highlight}</span>`
                )}
              </p>
              <div className="absolute bottom-4 right-4">
                <svg
                  className={`w-6 h-6 text-${feature.color}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}