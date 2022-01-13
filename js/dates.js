
const d = new Date();
const  year = d.getFullYear();

document.getElementById("#current_year").textContent = year;

const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last updated at ${document.lastModified}`;

