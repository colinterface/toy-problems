// Suppose we could access yesterday's stock prices as an array, where:
//
// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// For example, if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
//
// Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

'use strict';

function generateStockPrices(initialPrice, variance) {

  const prices = [initialPrice];

  // regular market hours are 9:30 am to 4:00pm (390 minutes)
  for (let i = 0; i < 390; i++) {
    prices.push(prices[prices.length - 1] + (Math.random() * variance - (variance / 2)));
  }

  return prices;

}

function findGreatestProfit(stockPrices) {

  const greatestFuturePrices = [];

  let greatestFuturePrice = Number.NEGATIVE_INFINITY;
  for (let i = stockPrices.length - 1; i >= 0; i--) {
    greatestFuturePrices[i] = greatestFuturePrice;
    if (stockPrices[i] > greatestFuturePrice) {
      greatestFuturePrice = stockPrices[i];
    }
  }

  let greatestProfit = Number.NEGATIVE_INFINITY;
  stockPrices.forEach((price, i) => {
    let profit = greatestFuturePrices[i] - price;
    if ((profit) > greatestProfit) {
      greatestProfit = profit;
    }
  });

  return greatestProfit;

}

const stockPricesYesterday = generateStockPrices(500, 10);
console.log(findGreatestProfit(stockPricesYesterday));
