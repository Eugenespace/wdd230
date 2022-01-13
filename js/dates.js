
const d = new Date();
let  year = d.getFullYear();
document.getElementById("#current_year").innerHTML = year

const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last updated at ${document.lastModified}`;

