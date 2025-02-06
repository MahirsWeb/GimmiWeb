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



window.addEventListener("scroll", function () {
  let header = document.querySelector(".header-top");
  if (window.scrollY > 50) { 
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.background = "#fff";
    header.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; 
  } else {
    header.style.position = "relative";
    header.style.boxShadow = "none";
  }
});




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
