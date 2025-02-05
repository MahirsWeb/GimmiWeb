var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

window.onscroll = function () {
  var header = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("side-menu");
  const openMenuBtn = document.getElementById("btn-menu");
  const closeMenuBtn = document.getElementById("close-menu");

  openMenuBtn.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menu.classList.add("active");
    }
  });

  closeMenuBtn.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
    }
  });
});
