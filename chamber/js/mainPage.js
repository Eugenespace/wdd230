const requestURL = "./localDirectory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const localdirectories = jsonObject['localdirector'];
    // localdirectories.forEach(displaydirectoies);
    let shwspot = localdirectories.filter(spotlight);
    showSpotlight(shwspot)
  });
 function spotlight(spot){
     if (spot.level === "vip") {
         return spot
     }

 }

 function showSpotlight(arr){
     for (let i = 1;i<3;i++){
     let imageholder = document.querySelector(`.spotlight${i} figure img`);
     console.log(imageholder)
     let h2 = document.querySelector(`.spotlight${i} h2`);
     let indexx = ~~(Math.random()* arr.length);
     imageholder.src= arr[indexx].imageUrl;
     h2.textContent = arr[indexx].name;

     arr = arr.filter((spots)=> {  
         return spots != arr[indexx]
     })}

 }