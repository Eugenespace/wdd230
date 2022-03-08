
// derive the current date using a date object

const d = new Date();
const  year = d.getFullYear();
const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Last updated at ${document.lastModified}`;
document.getElementById("current_year").innerHTML = year;
const fulldateUK = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(d);
document.querySelector(".currentdate").textContent = fulldateUK;

function toggleMenu(){
	document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerbttn").classList.toggle("open")
}

const x  = document.getElementById("hamburgerbttn")
    x.onclick = toggleMenu;


let dayNumber =  d.getDay();

let element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2){
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}


// lazy load js//
let lazyloadimage = document.querySelectorAll("[data-src]");

const loadImg = (img) => {
  const src = img.getAttribute("data-src");
  img.setAttribute("src", src);
  img.removeAttribute("data-src");
};

const observerImg = new IntersectionObserver(
  (items, observerImg) => {
    items.forEach((item) => {
      if (!item.isIntersecting) return;
      else {
        loadImg(item.target);
        observerImg.unobserve(item.target);
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px",
  }
);

lazyloadimage.forEach((img) => {
    observerImg.observe(img);
});


/*---------hidden message*/

document.getElementById('custId').setAttribute('value',new Date())

