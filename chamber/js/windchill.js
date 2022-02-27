
const temperature =  document.getElementById("temp").textContent;
const tempNumber =parseFloat(document.getElementById("temp").textContent);

const speedNumber =parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.625 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16))
+ (0.4275 * tempNumber * Math.pow(speedNumber,0.16))
windchill = Math.round(windchill);

if (tempNumber<=50 && speedNumber>3){
    document.getElementById("chill").textContent = "wind chill is "+windchill+"\xB0F";

} else{
document.getElementById("chill").textContent = "No windchill today"
}