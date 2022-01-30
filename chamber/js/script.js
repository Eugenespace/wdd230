
// derive the current date using a date object


function toggleMenu(){
	document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerbttn").classList.toggle("open")
}

const x  = document.getElementById("hamburgerbttn")
x.onclick = toggleMenu;

const d = new Date();
const  year = d.getFullYear();
const lastmod = document.querySelector("#lastmod")
lastmod.textContent = `Last updated at ${document.lastModified}`;
document.getElementById("current_year").innerHTML = year;

const fulldateUK = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(d)
document.querySelector("date").innerHTML = fulldateUK


