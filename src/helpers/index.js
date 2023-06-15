export const getTotal = (products) => {
  // Can't dynamically calc totals and use reducer in the checkout page!
  const total = products.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  return total;
};
