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

/* ---FEATURED PRODUCT--- */
const productsDOM = document.querySelector(".featured__container");

//getting the featured products
const getProducts = async () => {
  try {
    let result = await fetch("items.json");
    let data = await result.json();
    data = data.items;
    let products = data.filter((items) => items.featured == true);
    products = products.map((item) => {
      const {title, id, image } = item;
      return {title, id, image };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}



const displayProducts = (products) => {
  let result = "";
  products.forEach((product) => {
    result += `
      <div class="featured__card" ${product.id}>
        <img src=${product.image[0]} alt="product image" class="featured__img">
      <div class="featured__data"> 
          <h3 class="featured__title">${product.title}</h3>
        
      </div>
      <button class = "featured__button" data-id=${product.id}> See more</button> 
    </div>
    `;
  }
  );

  productsDOM.innerHTML = result;
  clickButton()
}


document.addEventListener("DOMContentLoaded", () => {
  //get all products
  getProducts().then((products) => displayProducts(products));
});


const clickButton = () => {
  let buttons = [...document.querySelectorAll(".featured__button")]
  // console.log("🚀 ~ file: homepg.js:69 ~ clickButton ~ buttons:", buttons)

  buttons.map(button=>{
    button.addEventListener("click",()=>{
      localStorage.setItem("id", button.dataset.id)
      window.location.href="productcard.html"
    })
  })
  
}