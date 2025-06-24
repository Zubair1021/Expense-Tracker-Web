const STORAGE_KEY = "expenses";

export const getExpenses = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveExpenses = (expenses) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};

