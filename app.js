'use strict';

// var sectionEl = document.getElementById('main-content');

// var userElement = document.createElement('h1'); //step one: create html element node

// userElement.setAttribute('id', 'made-an-element'); //step two: this is a method that changes an html element node
//the first input here is the type of element that we're making, the next is the id
//this would thus far do the followeding: <h1 id="made-an-element"></h1>

// sectionEl.appendChild(userElement);

var timeDay = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var eListStart = document.getElementById('cookie-list');

//Loop Store Titles to H1
function loopStore(){
  for(var t = 0; t < stores.length; t++){
    return stores[t];
  };
}

//LOOP TIME OF DAY
// function loopTime(){
//   for(var i = 0; i < timeDay.length; i++){
//     console.log(timeDay[i]);
//     return timeDay[i];
//   };
// }

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

// loopAvgCookies();

// for(var z = 0; 0 < stores.list; z++){
//   var eListTitle = document.createElement('h1');
//   console.log(loopstore());
//   eListTitle.textContent = loopStore();
//   ('body').appendChild(eListTitle);
//
// }

function loopTime(){
  for(var i = 0; i < timeDay.length; i++){
    console.log(avgCookies[i]);
    console.log(timeDay[i]);
  }
};

for(var h = 0; h < timeDay.length; h++){
  var eListItem = document.createElement('li');
  console.log(aDay(onePike));
  eListItem.textContent = loopTime() + ': ' + aDay(onePike);
  eListStart.appendChild(eListItem);
}

// storesList();
// aDay(seaTac);
// aDay(seaTac);
// aDay(capHill);
// aDay(alki);

//DEMOING PRINTING TO PAGE
