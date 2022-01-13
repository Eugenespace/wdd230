
const d = newDate()
const year = d.getFullYear()
document.getElementById("#year").textContent = year

const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last updated at ${document.lastModified}`;