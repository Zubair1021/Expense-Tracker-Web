import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, setEditing, deleteExpense }) {
  return (
    <div className="grid gap-4">
      {expenses
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onEdit={() => setEditing(expense)}
            onDelete={() => deleteExpense(expense.id)}
          />
        ))}
    </div>
  );
}
