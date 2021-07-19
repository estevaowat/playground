const stocks = [
  {
    name: 'Facebook',
    quantity: 20,
    currentStockPrice: 62.26,
    averagePrice: 60.42,
  },
  {
    name: 'Google',
    quantity: 20,
    currentStockPrice: 85.93,
    averagePrice: 73.54,
  },
  {
    name: 'Microsoft',
    quantity: 24,
    currentStockPrice: 60.3,
    averagePrice: 53.84,
  },
  {
    name: 'Netflix',
    quantity: 48,
    currentStockPrice: 54.6,
    averagePrice: 57.0,
  },
];

const profits = stocks.map(({ quantity, currentStockPrice, averagePrice }) => {
  return {
    profit: quantity * currentStockPrice - quantity * averagePrice,
  };
});

console.log(profits);
