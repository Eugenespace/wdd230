
const lastmod = document.querySelector("lastmod")
lastmod.textContent = `Last updated at ${document.lastModified}`;


const d = new Date();
const  year = d.getFullYear();
document.getElementById("current_year").innerHTML = year;


// document.getElementById("#lastmod").textContent =`Last updated at ${document.lastModified}`

