'use strict';

var sectionEl = document.getElementById('main-content');
//<section id="main-content"></section>

// var myUser = {
//   fullName: userFullName,
//   email: userEmail,
//   handle: userHandle,
//   followerCount: userfollowerCount,
//   postCount: userPostCount,
// };

var userElement = document.createElement('h1'); //step one: create html element node
userElement.setAttribute('id', 'made-an-element'); //step two: this is a method that changes an html element node
//the first input here is the type of element that we're making, the next is the id
//this would thus far do the followeding: <h1 id="made-an-element"></h1>

sectionEl.appendChild(userElement);
