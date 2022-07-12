let header = document.querySelector(".header");
let icon = document.querySelector(".icon");
const intro = document.querySelector(".intro");
let blue = getComputedStyle(document.documentElement).getPropertyValue(
  "--blue"
);

const observerOptions = { rootMargin: "-300px 0px 0px 0px" };

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.style.background = blue;
      header.style.boxShadow = "0px 2px 20px" + blue;
      setTimeout(function () {
        icon.style.visibility = "visible";
      }, 250);
    } else if (entry.isIntersecting) {
      header.style.background = "transparent";
      header.style.boxShadow = "none";
      icon.style.visibility = "hidden";
    }
  });
}, observerOptions);

observer.observe(intro);
