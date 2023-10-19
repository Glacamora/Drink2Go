const toggleMenu = document.querySelector(".nav__toggle-menu");
const menu = document.querySelector(".nav__list");

toggleMenu.addEventListener("click", () => {
  if(toggleMenu.classList.contains("nav__toggle-menu_closed")) {
    toggleMenu.classList.remove("nav__toggle-menu_closed");
    toggleMenu.classList.add("nav__toggle-menu_opened");

    menu.classList.remove("nav__list_closed");

    return;
  }

  toggleMenu.classList.remove("nav__toggle-menu_opened");
  toggleMenu.classList.add("nav__toggle-menu_closed");

  menu.classList.add("nav__list_closed");
});

const sliderElements = document.querySelectorAll(".main-slider__wrapper");
const leftBotton = document.querySelector(".main-slider__button_left");
const rightBotton = document.querySelector(".main-slider__button_right");

const navigationBottons = document.querySelectorAll(".main-slider__toggle");

let currentElementIndex = 0;
let maxCurrentElementIndex = sliderElements.length - 1;

leftBotton.addEventListener("click", () => {
  if(currentElementIndex <= 0) {
    return;
  }

  sliderElements[currentElementIndex].classList.add("main-slider__wrapper_hidden");
  navigationBottons[currentElementIndex].classList.remove("main-slider__toggle_active");
  currentElementIndex --;
  sliderElements[currentElementIndex].classList.remove("main-slider__wrapper_hidden");
  navigationBottons[currentElementIndex].classList.add("main-slider__toggle_active");
});

rightBotton.addEventListener("click", () => {
  if(currentElementIndex >= maxCurrentElementIndex) {
    return;
  }

  sliderElements[currentElementIndex].classList.add("main-slider__wrapper_hidden");
  navigationBottons[currentElementIndex].classList.remove("main-slider__toggle_active");
  currentElementIndex ++;
  sliderElements[currentElementIndex].classList.remove("main-slider__wrapper_hidden");
  navigationBottons[currentElementIndex].classList.add("main-slider__toggle_active");
});

for(let i = 0; i < navigationBottons.length; i++) {
  navigationBottons[i].addEventListener("click", (event) => {
    console.log(event.target.dataset.number);

    for(let n = 0; n < navigationBottons.length; n++) {
      if(n === i) {
        currentElementIndex = n;
        sliderElements[n].classList.remove("main-slider__wrapper_hidden");
        navigationBottons[n].classList.add("main-slider__toggle_active");

        continue;
      }

      sliderElements[n].classList.add("main-slider__wrapper_hidden");
      navigationBottons[n].classList.remove("main-slider__toggle_active");
    }
  });
}
