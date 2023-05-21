const slider_load = () => {
  var main = new Splide("#main-slider", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
}


let mainSliderImg = document.querySelector(".main__img");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let modalImage = document.getElementById("modal__image");

const id = localStorage.getItem("id");
const mainImg = document.querySelector("#main-slider ul");
const imgUl = document.querySelector("#thumbnail-slider ul");


//Product card details
const productImg = async () => {
  const response = await fetch("../items.json")
  const data = await response.json()
  const product = data.items.find(data => data.id == id)

  

  product.image.map(img => {
    mainSliderImg.innerHTML += `
      <li class="splide__slide"> 
      <img src=${img} alt="" />
      </li>`
    imgUl.innerHTML += `<li class="splide__slide">
    <img src=${img} alt="" "/>
    </li>`
     
    
  });
  slider_load();
 
}
productImg();






// Open the modal
mainImg.onclick = function (e) {
  let src = e.srcElement.src;
  modal.style.display = "block";
  modalImage.src = src;
};

// Close the modal
span.onclick = function () {
  modal.style.display = "none";
};


