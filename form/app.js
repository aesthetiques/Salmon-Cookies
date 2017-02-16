'use strict';
// WILL NEED A PARSEINT TO TURN THE FIELD INPUT INTO NON-STRINGS

// use blur for non-numbers in the boxes
var storeFormEl = document.getElementById('new-store-form');

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

  var store = new CookieStore(storeName, minCust, maxCust, avgSale);
  console.log(store);
}
