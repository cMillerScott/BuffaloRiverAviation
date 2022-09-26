// page variables

const header = document.querySelector(".header");
const icon = document.querySelector(".icon");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const blue = getComputedStyle(document.documentElement).getPropertyValue(
  "--blue"
);
const sliders = document.querySelectorAll(".slide-in");
const winWidth = window.innerWidth;
// const images = document.querySelectorAll("[data-src]");

// reload page on window resize
// window.onresize = () => {
//   location.reload();
// }

// navigation animation

const navObserverOptions = { threshold: 1};
const navObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (winWidth >= 480) {
      if (!entry.isIntersecting) {
        header.style.background = blue;
        header.style.boxShadow = "0px 2px 20px" + blue;
      } else if (entry.isIntersecting) {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
        icon.style.display = "none";
      }
    }
    if (winWidth >= 1280) {
      if (!entry.isIntersecting) {
        setTimeout(function () {
          icon.style.display = "flex";
        }, 250);
      } else if (entry.isIntersecting) {
        icon.style.display = "none";
      }
    } else {
      icon.style.display = "none";
    }
  });
}, navObserverOptions);

navObserver.observe(hero);

// slide-in animation

let appearOptions = { root: null, threshold: 0.5 };


const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (winWidth >= 800) {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");
        return;
      } else if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      }
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

// const about = document.querySelector("about");

// function heroChange(classLink) {
//   hero.className = "hero";
//   hero.classList.add(classLink);
//   location.reload();
// }
