/*===== HOME PAGE SLIDER=====*/
let counter = 1;
setInterval(() => {
  const first = document.querySelector(".home__img.show__img");
  const img = document.querySelector(`.img_${counter}`);
  first.classList.remove("show__img");
  counter++;
  img.classList.add("show__img");

  if (counter > 9) {
    counter = 1;
  }
}, 2000);
