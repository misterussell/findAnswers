//Storage variables
var answers = [];
var ul = $('ul');

//DOM manipulator function
function addToList(answer, i, arr) {
  // console.log('hi');
  var $addLi = $('<li>' + answer + '</li>');
  // var $addLiWithBreaks = $('<li>' + answer.replace("+", "<br />") + '</li>');
  // if (typeof(answer) === 'object') {
    // ul.append($addLiWithBreaks);
  // } else {
    ul.append($addLi);
  // }
}

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
// answers.push(withinPriceRange.join('\n'));
answers.push(withinPriceRange);

// Which item has a "GBP" currency code? Display it's name and price.
function getByPounds(item, i, arr) {
  return item.currency_code === "GBP";
}

var britishStuff = items.filter(getByPounds).map(getTitle) + ' costs &#163;' + items.filter(getByPounds).map(getPrice);
// console.log(britishStuff);
answers.push(britishStuff);

// UNFINISHED - Display a list of all items who are made of wood.
function getByMaterial(item, i, arr) {
  return item.materials.join(' ').indexOf('wood') === 0;
  // return item.materials.indexOf('wood') === 0;
}
// console.log(items[1].materials.join(' ').indexOf('wood'));
var pinocchio = items.filter(getByMaterial);
// console.log(pinocchio);
// var test = items[1].materials.join('');
// answers.push(pinocchio);


// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
function materialCount(item, i, arr) {
  return item.materials.length >= 8;
}

function getNameAndItems(item, i, arr) {
  var newObj = [];
  newObj.title = item.title;
  newObj.items = item.materials;
  return newObj;
}

var lotsOfParts = items.filter(materialCount).map(getNameAndItems);
answers.push(lotsOfParts);

// How many items were made by their sellers?

function getByMaker(item, i, arr) {
  return item.who_made === 'i_did';
}

var handMade =  items.filter(getByMaker);
var handMadeAnswer = handMade.length + ' were made by their sellers';
// console.log(handMade.length);
answers.push(handMadeAnswer);

//add to HTML
answers.forEach(addToList);
console.log(answers);
// console.log(typeof(answers[0]));
// console.log(typeof(answers[1]));
