//первый слайдер
const swiper = new Swiper(".swiper1", {
  pagination: false,

  // loop: true,
  // grabCursor: true,
  on: {
    slideChange: function () {
      updatePagination(this.activeIndex);
    },
  },
});
//второй слайдер
const swiper2 = new Swiper(".swiper2", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  on: {
    slideChange: function () {
      updatePagination2(this.activeIndex);
    },
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

//третий слайдер
const swiper3 = new Swiper(".swiper3", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  height: 99,
  on: {
    slideChange: function () {
      updatePagination3(this.activeIndex);
    },
  },
  breakpoints: {
    920: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

//четвертый слайдер
const swiper4 = new Swiper(".swiper4", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  on: {
    slideChange: function () {
      updatePagination4(this.activeIndex);
    },
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
//пятый слайдер
const swiper5 = new Swiper(".swiper5", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  on: {
    slideChange: function () {
      updatePagination5(this.activeIndex);
    },
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
//шестой слайдер
const swiper6 = new Swiper(".swiper6", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  on: {
    slideChange: function () {
      updatePagination6(this.activeIndex);
    },
  },
  breakpoints: {
    920: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
//седьмой слайдер
const swiper7 = new Swiper(".swiper7", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  on: {
    slideChange: function () {
      updatePagination7(this.activeIndex);
    },
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
//восьмой слайдер
const swiper8 = new Swiper(".swiper8", {
  pagination: {
    enabled: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  on: {
    slideChange: function () {
      updatePagination8(this.activeIndex);
    },
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
//пагинация для первого слайдера
const pagination = document.querySelectorAll(
  ".swiper-pagination__custom1 span"
);
pagination.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper.slideTo(index);
    updatePagination(index);
  });
});
function updatePagination(activeIndex) {
  pagination.forEach((span) => {
    span.classList.remove("active");
  });
  pagination[activeIndex].classList.add("active");
}
//пагинация для второго слайдера

const pagination2 = document.querySelectorAll(
  ".swiper-pagination__custom2 span"
);
pagination2.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper2.slideTo(index);
    updatePagination2(index);
  });
});
function updatePagination2(activeIndex) {
  pagination2.forEach((span) => {
    span.classList.remove("active");
  });
  pagination2[activeIndex].classList.add("active");
}
//пагинация для третьего слайдера

const pagination3 = document.querySelectorAll(
  ".swiper-pagination__custom3 span"
);
pagination3.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper3.slideTo(index);
    updatePagination3(index);
  });
});
function updatePagination3(activeIndex) {
  pagination3.forEach((span) => {
    span.classList.remove("active");
  });
  pagination3[activeIndex].classList.add("active");
}

//пагинация для четвертого слайдера

const pagination4 = document.querySelectorAll(
  ".swiper-pagination__custom4 span"
);
pagination4.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper4.slideTo(index);
    updatePagination4(index);
  });
});
function updatePagination4(activeIndex) {
  pagination4.forEach((span) => {
    span.classList.remove("active");
  });
  pagination4[activeIndex].classList.add("active");
}
//пагинация для пятого слайдера

const pagination5 = document.querySelectorAll(
  ".swiper-pagination__custom5 span"
);
pagination5.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper5.slideTo(index);
    updatePagination5(index);
  });
});
function updatePagination5(activeIndex) {
  pagination5.forEach((span) => {
    span.classList.remove("active");
  });
  pagination5[activeIndex].classList.add("active");
}
//пагинация для шестого слайдера

const pagination6 = document.querySelectorAll(
  ".swiper-pagination__custom6 span"
);
pagination6.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper6.slideTo(index);
    updatePagination6(index);
  });
});
function updatePagination6(activeIndex) {
  pagination6.forEach((span) => {
    span.classList.remove("active");
  });
  pagination6[activeIndex].classList.add("active");
}
//пагинация для седьмого слайдера

const pagination7 = document.querySelectorAll(
  ".swiper-pagination__custom7 span"
);
pagination7.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper7.slideTo(index);
    updatePagination7(index);
  });
});
function updatePagination7(activeIndex) {
  pagination7.forEach((span) => {
    span.classList.remove("active");
  });
  pagination7[activeIndex].classList.add("active");
}
//пагинация для восьмого слайдера

const pagination8 = document.querySelectorAll(
  ".swiper-pagination__custom8 span"
);
pagination8.forEach((span, index) => {
  span.addEventListener("click", () => {
    swiper8.slideTo(index);
    updatePagination8(index);
  });
});
function updatePagination8(activeIndex) {
  pagination8.forEach((span) => {
    span.classList.remove("active");
  });
  pagination8[activeIndex].classList.add("active");
}

document.querySelector(".body__header-call").onclick = function () {
  const menu = document.querySelector(".header-phone__list");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("visible");
  } else {
    menu.classList.remove("visible");
    menu.classList.add("hidden");
  }
};

document
  .querySelector(".body__header-call")
  .addEventListener("click", function () {
    this.classList.toggle("active"); // Переключаем класс "active" на кнопке
  });

document.querySelector(".menu__catalog-list").onclick = function (e) {
  e.preventDefault();

  const subMenu = document.querySelector(".sub-menu-catalog__block");

  subMenu.classList.toggle("active");
};

const burger = document.querySelector(".icon__menu");
const wrap_list = document.querySelector(".top__header-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  wrap_list.classList.toggle("active");
});

document.querySelector(".menu__item-btn").onclick = function () {
  const itemBurger = document.querySelector(".menu__item-burger");
  itemBurger.classList.toggle("visible");
  if (itemBurger.classList.contains("hidden")) {
    itemBurger.classList.remove("hidden");
    itemBurger.classList.add("visible");
  } else {
    itemBurger.classList.remove("visible");
    itemBurger.classList.add("hidden");
  }
};

document.querySelector(".menu__item-btn").onclick = function () {
  const burgerList = document.querySelector(".menu__item-burger");
  this.classList.toggle("active");
  if (burgerList.classList.contains("hidden")) {
    burgerList.classList.remove("hidden");
    burgerList.classList.add("visible");
  } else {
    burgerList.classList.remove("visible");
    burgerList.classList.add("hidden");
  }
};

const ratingItemList = document.querySelectorAll(".star-rating__item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemList);

ratingItemsArray.forEach((item) =>
  item.addEventListener("click", () => {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  })
);

//счетчик отзывов //работает только с первым елементом
// const ratingText = document.querySelector(".star-rating__text");

// let count = 12;
// ratingText.textContent = `${count} отзывов`;
// const starRating = document.querySelector(".star-rating");

// starRating.addEventListener("click", (event) => {
//   if (event.target.classList.contains("star-rating__item")) {
//     ++count;
//     ratingText.textContent = `${count} отзывов`;
//   }
// });

//счетчик отзывов

const ratingTextElements = document.querySelectorAll(".star-rating__text");
let count = 12;
ratingTextElements.forEach((ratingText) => {
  ratingText.textContent = `${count} отзывов`;
});

const starRatingElements = document.querySelectorAll(".star-rating");
starRatingElements.forEach((starRating, index) => {
  starRating.addEventListener("click", (event) => {
    if (event.target.classList.contains("star-rating__item")) ++count;
    ratingTextElements[index].textContent = `${count} отзывов`;
  });
});

//footer плавное открытие

const footerTitle = document.querySelectorAll(".footer__bottom-title");
// const footerList = document.querySelector(".footer__bottom-list");

footerTitle.forEach((title) => {
  title.addEventListener("click", () => {
    const footerList = title.parentElement;
    const footerItems = footerList.querySelectorAll(".footer__bottom-item");
    footerItems.forEach((item) => {
      item.classList.toggle("visible");
    });
  });
});

function initSwiper() {
  return new Swiper(".swiper1", {
    pagination: false,
    on: {
      slideChange: function () {
        updatePagination(this.activeIndex);
      },
    },
  });
}
