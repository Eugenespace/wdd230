
const d = new Date();
const  year = d.getFullYear();

document.getElementById("#current_year").textContent = year;
document.getElementById("#lastmod").textContent =`Last updated at ${document.lastModified} `

// const lastmod = document.querySelector('#lastmod')
// lastmod.textContent = `Last updated at `;

