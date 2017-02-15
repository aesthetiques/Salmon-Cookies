'use strict';

// $('.this').click(function(){
//   $(this).next('*').slideToggle();
// });

var timeDay = ['', '6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki', 'Total'];
var storesHtml = ['one-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];

// var defListItems = document.getElementsByTagName('tr');
// var mainGrid = document.getElementsByClassName('');

//Loop stores
function loopStores(){
  for(var o = 0; o < stores.length; o++){
    console.log(stores[i]);
  }
}

//LOOP THE HOURS OF DAY * loopAvgCookies();
function aDay(x){
  return x.avgHourly();
};

//Cookie store repo
function CookieStore(minCust, maxCust, avgSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
}
var onePike = new CookieStore(23, 65, 6.3);
var seaTac = new CookieStore(3, 24, 1.2);
var seaCenter = new CookieStore(11, 38, 3.7);
var capHill = new CookieStore(20, 38, 2.3);
var alki = new CookieStore(2, 16, 4.6);

CookieStore.prototype.avgHourly = function(){
  return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
};

var mainTable = document.getElementById('main-table');

var tableHead = document.createElement('thead');
mainTable.appendChild(tableHead);

// var eHeaderItem = document.createElement('tr');
var cookieListEl = document.getElementById('cookie-list');
var bodyAppendEl = document.getElementById('main-table');

for(var h = 0; h < timeDay.length; h++){
  var eHeaderItem = document.createElement('th');
  eHeaderItem.textContent = timeDay[h];
  tableHead.appendChild(eHeaderItem);
}

for(var v = 0; v < stores.length; v++){
  // mainDiv.appendChild(loopTr);
  var loopTr = document.createElement('tr');
  var storeTr = document.createElement('th');

  // var loopedId = document.getElementById(stores[v]);

  bodyAppendEl.appendChild(loopTr);
  // storeTr.setAttribute('id', storesHtml[v]);
  storeTr.textContent = stores[v];
  loopTr.appendChild(storeTr);

  for(var h = 0; h < 15; h++){
    // var eHeaderItem = document.createElement('th');
    // eHeaderItem.textContent = timeDay[h];
    // tableHead.appendChild(eHeaderItem);

    var storeTr = document.createElement('tr');
    var eRowItem = document.createElement('td');
    eRowItem.textContent = aDay(onePike, seaTac, seaCenter, capHill, alki);
    loopTr.appendChild(eRowItem);
  }
  // timeDay[h] + ': ' +
}

// function avgHourly(){
//   return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
// };

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
    //
    // var seaCenter = {
    //   minCust: 11,
    //   maxCust: 38,
    //   avgSale: 3.7,
    //   avgHourly: function(){
    //     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
    //   }
    // };
    //
    //   avgSale: 1.2,
    //   avgHourly: function(){
    //     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
    //   }
    // };
    //
    // var capHill = {
    //   minCust: 20,
    //   maxCust: 38,
    //   avgSale: 2.3,
    //   avgHourly: function(){
    //     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
    //   }
    // };
    //
    // var alki = {
    //   minCust: 2,
    //   maxCust: 16,
    //   avgSale: 4.6,
    //   avgHourly: function(){
    //     return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
    //   }
    // };
    //

// document. body.appendChild(mainDiv);

// var stores = [pikePlace, otherStore, anotherStore];
//
// var tableEl = document.createElement('table');
// for(b = 0; b < tableEl.length; b++){
//   var currentStore = stores[b];
//   var rowEl = document.createElement('tr');
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.name;
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td');
//   avgCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(avgCookiesEl);
//
//   rowEl.appendChild(rowEl);
// }
// document.body.appendChild(tableEl);

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

// function bodyAppendEl(){
//   document.getElementsByClassName('locations');
// }

//Loop Store Titles to td
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

// var userElement = document.createElement('td'); //step one: create html element node

// userElement.setAttribute('id', 'made-an-element'); //step two: this is a method that changes an html element node
//the first input here is the type of element that we're making, the next is the id
//this would thus far do the following: <td id="made-an-element"></td>

// sectionEl.appendChild(userElement);

// loopAvgCookies();

// for(var z = 0; 0 < stores.list; z++){
//   var eListTitle = document.createElement('td');
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
