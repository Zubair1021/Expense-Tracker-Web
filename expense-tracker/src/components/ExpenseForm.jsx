import { useState, useEffect } from "react";
import { generateId } from "../utils/helpers";

export default function ExpenseForm({ onSubmit, editing }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required";
    if (!form.amount) newErrors.amount = "Amount is required";
    else if (form.amount < 0) newErrors.amount = "Amount cannot be negative";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.date) newErrors.date = "Date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const expense = { ...form, id: editing ? form.id : generateId() };
    onSubmit(expense);
    setForm({ title: "", amount: "", category: "", date: "", notes: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-blue-200 mb-6 max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl mt-15"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-blue-800 animate-fade-in-down">
        {editing ? "Edit Expense" : "Add New Expense"}
      </h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="relative">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className={`w-full p-3 rounded-lg border ${
              errors.title ? "border-red-400" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400 text-gray-700`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.title}</p>
          )}
        </div>
        <div className="relative">
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount (Rs)"
            required
            className={`w-full p-3 rounded-lg border ${
              errors.amount ? "border-red-400" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400 text-gray-700`}
          />
          {errors.amount && (
            <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.amount}</p>
          )}
        </div>
        <div className="relative">
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className={`w-full p-3 rounded-lg border ${
              errors.category ? "border-red-400" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400 text-gray-700`}
          />
          {errors.category && (
            <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.category}</p>
          )}
        </div>
        <div className="relative">
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border ${
              errors.date ? "border-red-400" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400 text-gray-700`}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.date}</p>
          )}
        </div>
      </div>
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes (optional)"
        className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400 text-gray-700 resize-y min-h-[100px] "
      />
      <button
        type="submit"
        className="w-full mt-4 sm:mt-6 py-2 sm:py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
      >
        {editing ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}