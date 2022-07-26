// page variables

const header = document.querySelector(".header");
const icon = document.querySelector(".icon");
const intro = document.querySelector(".intro");
const blue = getComputedStyle(document.documentElement).getPropertyValue(
  "--blue"
);
const sliders = document.querySelectorAll(".slide-in");
// const images = document.querySelectorAll("[data-src]");

// navigation animation

const navObserverOptions = { threshold: 0.85 };
const navObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.style.background = blue;
      header.style.boxShadow = "0px 2px 20px" + blue;
      setTimeout(function () {
      icon.style.visibility = "visible";
      }, 250);
      // icon.style.zIndex = 1;
    } else if (entry.isIntersecting) {
      header.style.background = "transparent";
      header.style.boxShadow = "none";
      icon.style.visibility = "hidden";
    }
  });
}, navObserverOptions);

navObserver.observe(intro);

// slide-in animation

const appearOptions = { threshold: 1 };

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//image animation

// function preloadImage(img) {
//   const src = img.getAttribute("data-src");
//   if (!src) {
//     return;
//   }

//   img.src = src;
// }

// const imgOptions = { rootMargin: "-400px" };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   });
// }, imgOptions);

// images.forEach((image) => {
//   imgObserver.observe(image);
// });
