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