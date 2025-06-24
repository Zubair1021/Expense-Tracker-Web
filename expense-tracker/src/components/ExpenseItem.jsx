import { CodeIcon } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

export default function ExpenseItem({ expense, onEdit, onDelete }) {
  return (
    <div className="group relative overflow-hidden border border-gray-300 rounded-[32px] aspect-auto transition-colors duration-200 hover:border-[#0ea5e9] focus:outline-[5px] focus:outline-[Highlight]">
      <PixelCanvas
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
        variant="icon"
      />
      <div className="relative z-10 flex flex-col gap-1 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
            <CodeIcon className="w-5 h-5 text-blue-400" />
            {expense.title}
          </h3>
          <span className="text-sm font-medium text-blue-500">Rs {expense.amount}</span>
        </div>
        <p className="text-sm text-gray-600">{expense.category} | {expense.date}</p>
        {expense.notes && <p className="text-gray-500 text-xs italic">{expense.notes}</p>}
        <div className="mt-2 flex gap-2">
          <button onClick={onEdit} className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Edit</button>
          <button onClick={onDelete} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}