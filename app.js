'use strict';

// $('.this').click(function(){
//   $(this).next('*').slideToggle();
// });

var timeDay = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storesHtml = ['one-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];

var eListStart = document.getElementById('cookie-list');
var hOneStart = document.getElementById('body');
var defListItems = document.getElementsByTagName('dl');
var mainGrid = document.getElementsByClassName('');

//Loop stores
function loopStores(){
  for(var o = 0; o < stores.length; o++){
    console.log(stores[i]);
  }
}

//LOOP THE HOURS OF DAY * loopAvgCookies();
function aDay(x){
  // for(var y = 0; y < stores.length; y++){
  //   return stores[y];
  // };
  return x.avgHourly();
};

// function avgHourly(){
//   return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
// };

function CookieStore(minCust, maxCust, avgSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
}
var onePike = new CookieStore(23, 65, 6.3);
var seaTac = new CookieStore(3, 24, 1.2);

CookieStore.prototype.avgHourly = function(){
  return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
};

//--STORE OBJECTS BELOW--
// var onePike = {
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   avgHourly: function(){
//     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
//   },
// };
//
// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   avgHourly: function(){
//     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
//   }
// };

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  avgHourly: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
  }
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  avgHourly: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  avgHourly: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
  }
};

// var mainDiv = document.createElement('div');
// mainDiv.setAttribute('class', 'container_12');

for(var v = 0; v < stores.length; v++){
  // mainDiv.appendChild(loopDl);
  var loopDl = document.createElement('dl');
  var loopedId = document.getElementById(stores[v]);
  var hOne = document.createElement('dt');

  hOneStart.appendChild(loopDl);
  // hOne.setAttribute('class', 'slideOut');
  hOne.setAttribute('id', storesHtml[v]);
  hOne.textContent = stores[v];
  loopDl.appendChild(hOne);

  for(var h = 0; h < timeDay.length; h++){
    var eListItem = document.createElement('dd');
    eListItem.textContent = timeDay[h] + ': ' + aDay(onePike, seaTac, seaCenter, capHill, alki);
    loopDl.appendChild(eListItem);
  }
}
// document. body.appendChild(mainDiv);

var stores = [pikePlace, otherStore, anotherStore];

var tableEl = document.createElement('table');
for(b = 0; b < tableEl.length; b++){
  var currentStore = stores[b];
  var rowEl = document.createElement('tr');
  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  var minCustEl = document.createElement('td');
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td');
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td');
  avgCookiesEl.textContent = currentStore.avgCookies;
  rowEl.appendChild(avgCookiesEl);

  rowEl.appendChild(rowEl);
}
document.body.appendChild(tableEl);

// break;
// function randomInt(min, max){
//   min = Math.ciel(this.minCust);
//   max = Math.floor(this.maxCust);
//   return Math.floor(Math.random() * (max - min + 1 )) + this.minCust;
// }

// //LOOP AVG COOKIES PER HR
// function loopAvgCookies(){
//   for(var j = 0; j < avgCookies.length; j++){
//     console.log(avgCookies[j]);
//   }
// };

// var avgCookies = [onePike.avgHourly(), seaTac.avgHourly(), seaCenter.avgHourly(), capHill.avgHourly(), alki.avgHourly()];

// function hOneStart(){
//   document.getElementsByClassName('locations');
// }

//Loop Store Titles to dt
// function loopStore(){
//   for(var t = 0; t < stores.length; t++){
//     return stores[t];
//   };
// }

//LOOP TIME OF DAY
// function loopTime(){
//   for(var i = 0; i < timeDay.length; i++){
//     console.log(timeDay[i]);
//     return timeDay[i];
//   };
// }

// var sectionEl = document.getElementById('main-content');

// var userElement = document.createElement('dt'); //step one: create html element node

// userElement.setAttribute('id', 'made-an-element'); //step two: this is a method that changes an html element node
//the first input here is the type of element that we're making, the next is the id
//this would thus far do the following: <dt id="made-an-element"></dt>

// sectionEl.appendChild(userElement);

// loopAvgCookies();

// for(var z = 0; 0 < stores.list; z++){
//   var eListTitle = document.createElement('dt');
//   console.log(loopstore());
//   eListTitle.textContent = loopStore();
//   ('body').appendChild(eListTitle);
//
// }

// function loopTime(){
//   for(var i = 0; i < timeDay.length; i++){
//     console.log(avgCookies[i]);
//     console.log(timeDay[i]);
//     return timeDay[i];
//   }
// };

// function printEverything(){

// storesList();
// aDay(seaTac);
// aDay(seaTac);
// aDay(capHill);
// aDay(alki);

//DEMOING PRINTING TO PAGE
