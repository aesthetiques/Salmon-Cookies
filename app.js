'use strict';

// $('.this').click(function(){
//   $(this).next('*').slideToggle();
// });

var timeDay = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storesConstructed = [];

//Get element access
var mainTable = document.getElementById('main-table'); //Get main table

// //Loop stores
// function loopStores(){
//   for(var o = 0; o < stores.length; o++){
//     console.log(stores[i]);
//   }
// }

function loopRenderTable(){
  for(var w = 0; w < stores.length; w++){
    stores[w].renderTable();
  }
}

//Cookie store repo
function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust; //maximum customers per hour
  this.maxCust = maxCust; //minimum customers per hour
  this.avgSale = avgSale; //avg sales per customer
  // this.saleTotal = 0;
}

//Our Stores
var onePike = new CookieStore('First and Pike', 23, 65, 6.3); //First and Pike Store
var seaTac = new CookieStore('Seatac Airport', 3, 24, 1.2); //Seatac Store
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7); //Seattle Center Store
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3); //Capitol Hill Store
var alki = new CookieStore('Alki', 2, 16, 4.6); //Alki Store

storesConstructed.push(onePike, seaTac, seaCenter, capHill, alki);
console.log(storesConstructed);

var stores = [onePike, seaTac, seaCenter, capHill, alki];
//RNGEESUS
CookieStore.prototype.avgHourly = function(){
  return Math.floor(Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
}; //Function for calculating random number based on each location's info.

//CREATE PROTOTYPE THAT CREATES A TH FOR STORE TITLE AND TDS
CookieStore.prototype.renderTable = function(){
  // for(var v = 0; v < stores.length; v++){
  var loopTr = document.createElement('tr');
  var storeTh = document.createElement('th');
  mainTable.appendChild(loopTr);
  storeTh.textContent = this.name;
  loopTr.appendChild(storeTh);
  for(var h = 0; h < timeDay.length; h++){
    var eRowItem = document.createElement('td');
    eRowItem.textContent = this.avgHourly();
    loopTr.appendChild(eRowItem);
  }
};

var tableHead = document.createElement('thead');//<thead> </thead>
mainTable.appendChild(tableHead); //<table> <thead></thead> </table>

// spacer block for thead
var spacerTh = document.createElement('th');//<thead> </thead>
tableHead.appendChild(spacerTh); // //<thead> <th></th> </thead>

for(var h = 0; h < timeDay.length; h++){
  var eHeaderItem = document.createElement('th'); //<th> </th>
  eHeaderItem.textContent = timeDay[h]; //< >
  tableHead.appendChild(eHeaderItem); //< >
}

loopRenderTable();

//EVENT LISTENERS

// WILL NEED A PARSEINT TO TURN THE FIELD INPUT INTO NON-STRINGS

// use blur for non-numbers in the boxes
var storeFormEl = document.getElementById('new-store-form'); //creates form

storeFormEl.addEventListener('submit', handleSubmit); //hitting false makes the older browsers bubble

function handleSubmit(event){
  event.preventDefault(); //stops page from reloading/sending data to server - the default setting for submission
  event.stopPropagation(); //stops bubbling, stop capturing

  var storeName = event.target.cookieStoreName.value; //this will log whatever the event's goal, or "target" action is
  var minCust = parseInt(event.target.minCust.value); //this will log whatever the event's goal, or "target" action is
  var maxCust = parseInt(event.target.maxCust.value); //this will log whatever the event's goal, or "target" action is
  var avgSale = parseFloat(event.target.avgSale.value); //this will log whatever the event's goal, or "target" action is

  console.log(storeName); //this will log whatever the event's goal, or "target" action is
  console.log(minCust); //this will log whatever the event's goal, or "target" action is
  console.log(maxCust); //this will log whatever the event's goal, or "target" action is
  console.log(avgSale); //this will log whatever the event's goal, or "target" action is
  console.log('user pressed submit button on form');

  var nuevoStore = new CookieStore(storeName, minCust, maxCust, avgSale);
  stores.push(nuevoStore);
  // storesConstructed.push(storeName);
  // console.log(store);
  nuevoStore.renderTable();
}

// mainDiv.appendChild(loopTr);
// var eHeaderItem = document.createElement('tr');
// var loopedId = document.getElementById(stores[v]);
// storeTr.setAttribute('id', storesHtml[v]);
// timeDay[h] + ': ' +
// var eHeaderItem = document.createElement('th');
// eHeaderItem.textContent = timeDay[h];
// tableHead.appendChild(eHeaderItem);

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

// function mainTable(){
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
