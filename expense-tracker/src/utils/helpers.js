export const generateId = () => Date.now().toString();

export const getTotalAmount = (expenses) =>
  expenses.reduce((total, item) => total + Number(item.amount), 0);

export const getCategoryBreakdown = (expenses) => {
  const map = {};
  expenses.forEach(({ category, amount }) => {
    map[category] = (map[category] || 0) + Number(amount);
  });
  return map;
};

