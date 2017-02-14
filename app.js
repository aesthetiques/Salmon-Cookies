'use strict';

// var sectionEl = document.getElementById('main-content');

// var userElement = document.createElement('dt'); //step one: create html element node

// userElement.setAttribute('id', 'made-an-element'); //step two: this is a method that changes an html element node
//the first input here is the type of element that we're making, the next is the id
//this would thus far do the following: <dt id="made-an-element"></dt>

// sectionEl.appendChild(userElement);

var timeDay = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storesHtml = ['one-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];

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

//Loop stores
function loopStores(){
  for(var o = 0; o < stores.length; o++){
    console.log(stores[i]);
  }
}

//LOOP AVG COOKIES PER HR
function loopAvgCookies(){
  for(var j = 0; j < avgCookies.length; j++){
    console.log(avgCookies[j]);
  }
};

//LOOP THE HOURS OF DAY * loopAvgCookies();
function aDay(x){
  console.log(x.avgHourly());
  return x.avgHourly();
};

// function randomInt(min, max){
//   min = Math.ciel(this.minCust);
//   max = Math.floor(this.maxCust);
//   return Math.floor(Math.random() * (max - min + 1 )) + this.minCust;
// }

//--STORE OBJECTS BELOW--

var onePike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  avgHourly: function(){
    return Math.floor(Math.random() * (((this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
  },
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  avgHourly: function(){
    return Math.floor(Math.random() * (((this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
  }
};

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  avgHourly: function(){
    return Math.floor(Math.random() * (((this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
  }
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  avgHourly: function(){
    return Math.floor(Math.random() * (((this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  avgHourly: function(){
    return Math.floor(Math.random() * (((this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
  }
};

var avgCookies = [onePike.avgHourly(), seaTac.avgHourly(), seaCenter.avgHourly(), capHill.avgHourly(), alki.avgHourly()];

var eListStart = document.getElementById('cookie-list');
var hOneStart = document.getElementById('body');
var defListItems = document.getElementsByTagName('dl');

for(var v = 0; v < stores.length; v++){
  var loopDl = document.createElement('dl');
  hOneStart.appendChild(loopDl);
  var loopedId = document.getElementById(stores[v]);
  var hOne = document.createElement('dt');
  hOne.setAttribute('id', storesHtml[v]);
  console.log(hOne);
  hOne.textContent = stores[v];
  loopDl.appendChild(hOne);
  for(var h = 0; h < timeDay.length; h++){
    var eListItem = document.createElement('dd');
    console.log(aDay(onePike));
    eListItem.textContent = timeDay[h] + ': ' + aDay(onePike, seaTac, seaCenter, capHill, alki);
    loopDl.appendChild(eListItem);
  }
  // break;
}
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
