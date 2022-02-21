
const message = document.querySelector("#lastVisit");
console.log(message)
const lv = Number(localStorage.getItem("visits-ls"));
console.log(`last visit: ${lv}`);
const today = Date.now();
console.log(`today is: ${today}`);

const msInDay = 1000 * 60 * 60 * 24;
console.log(`milliseconds in a day is ${msInDay}`);

let difference = Math.round((today - lv)/msInDay);

localStorage.setItem("visits-ls", today);

if (lv !== 0){
 
    message.textContent = `it's been ${difference} days since your last visit.`;
} else {
   
    message.textContent = `This is your first visit enjoy surfing the page.`;
}


