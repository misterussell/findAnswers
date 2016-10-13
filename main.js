//Storage variables
var answers = [];

//AVG Price of all items
// The average price is $23.63
function getPrice(item, i, arr) {
  return item.price;
}
function getTotal(runningValue, price, i, arr) {
  return runningValue + price;
}

var itemCosts = items.map(getPrice);
var avgPrice = (itemCosts.reduce(getTotal, 0)/itemCosts.length).toFixed(2);
// console.log(avgPrice);

var answerOne = 'The average price is ' + avgPrice;
answers.push(answerOne);

// Show me how to get an array of items that cost between $14.00 and $18.00 USD
function getByPrice(item, i, arr) {
  return item.currency_code === 'USD' && item.price < 18.00 && item.price > 14.00;
}
function getTitle(item, i, arr) {
  return item.title;
}

var withinPriceRange = items.filter(getByPrice).map(getTitle);
// console.log(withinPriceRange);

// Which item has a "GBP" currency code? Display it's name and price.
function getCurrency(item, i, arr) {
  return item.currency_code === "GBP";
}

// Display a list of all items who are made of wood.


// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.


// How many items were made by their sellers?
