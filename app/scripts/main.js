// Toggle menu
const menuOpen = document.querySelector(".header-menu-open");
const menuClose = document.querySelector(".header-menu-close");
const menuHeader = document.querySelector(".header-menu");
const expandedClass = "is-expanded";
menuOpen.addEventListener("click", () => {
  menuHeader.classList.add(expandedClass);
});
menuClose.addEventListener("click", () => {
  menuHeader.classList.remove(expandedClass);
});
window.addEventListener("click", (e) => {
  if (
    !menuHeader.contains(e.target) &&
    !e.target.matches(".header-menu-open")
  ) {
    menuHeader.classList.remove(expandedClass);
  }
});

// Quote slick slider
$(document).ready(function () {
  $(".quote-list").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<button type='button' class='quote-arrow quote-arrow-prev'>
        <i class='fas fa-angle-left quote-arrow-icon' aria-hidden='true'></i>
      </button>`,
    nextArrow: `<button type='button' class='quote-arrow quote-arrow-next'>
        <i class='fas fa-angle-right quote-arrow-icon' aria-hidden='true'></i>
      </button>`,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          speed: 200,
        },
      },
    ],
  });
});

// Testimonial slick slider
$(document).ready(function () {
  $(".testimonial-list").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<button type='button' class='testimonial-arrow testimonial-arrow-prev'>
        <i class='fas fa-angle-left testimonial-arrow-icon' aria-hidden='true'></i>
      </button>`,
    nextArrow: `<button type='button' class='testimonial-arrow testimonial-arrow-next'>
        <i class='fas fa-angle-right testimonial-arrow-icon' aria-hidden='true'></i>
      </button>`,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          speed: 200,
        },
      },
    ],
  });
});
