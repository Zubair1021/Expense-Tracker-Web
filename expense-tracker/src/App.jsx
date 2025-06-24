import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getExpenses, saveExpenses } from "./data/localStorage";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import FeaturePage from "./pages/FeaturePage"; 

function HomePage() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const updateExpenses = (newExpenses) => {
    setExpenses(newExpenses);
    saveExpenses(newExpenses);
  };

  const addExpense = (expense) => {
    updateExpenses([expense, ...expenses]);
    toast.success("Expense added successfully!");
  };

  const deleteExpense = (id) => {
    updateExpenses(expenses.filter((e) => e.id !== id));
    toast.info("Expense deleted");
  };

  const editExpense = (updatedExpense) => {
    updateExpenses(
      expenses.map((e) => (e.id === updatedExpense.id ? updatedExpense : e))
    );
    setEditing(null);
    toast.success("Expense updated!");
  };

    if (showLoader) {
    return <Preloader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <ExpenseForm onSubmit={editing ? editExpense : addExpense} editing={editing} />
      <ExpenseList
        expenses={expenses}
        setEditing={setEditing}
        deleteExpense={deleteExpense}
      />
      <Summary expenses={expenses} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturePage />} />
        </Routes>

    </Router>
  );
}
