

// determine days between stored date and visit date ... today
// const millisecondsToDays = 1635714636193; 
// const lastVisit = localStorage.getItem('lastvisit');
// const determine = (lastVisit - Date.now() / millisecondsToDays).toFixed(0)
//  localStorage.setItem('lastvisit', Date.now());
// console.log("Previous Page", lastVisit)
// console.log("current Page", determine)

const today = new Date;
const lv = localStorage.getItem('lv')
localStorage.setItem('lv',Date.now());
const msInDay = 1000 * 60 * 60 * 24;
console.log(`milliseconds in a day is ${msInDay}`);
let difference = Math.round((today - lv)/msInDay);