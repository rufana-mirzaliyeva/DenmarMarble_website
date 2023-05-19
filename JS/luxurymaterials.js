/* ---LUXURY PRODUCTS--- */

const luxProductsDOM = document.querySelector(".luxury__container");

//getting the featured products
const luxuryProducts = async () => {
    try {
      let result = await fetch("./items.json");
      let data = await result.json();
      data = data.items;
      let luxProducts = data.filter((items) => items.product__type == "luxury");
      luxProducts = luxProducts.map((item) => {
        const { type, title, id, image } = item;
        return { type, title, id, image };
      });
      return luxProducts;
    } catch (error) {
      console.log(error);
    }
  }

const displayProducts = (luxProducts) => {
    let result = "";

    luxProducts.forEach((product) => {
      result += `
      <div class="luxury__card" ${product.id}>
        <img src=${product.image[0]} alt="product image" class="luxury__img">
      <div class="luxury__data"> 
          <h3 class="luxury__title">${product.title}</h3>
          <span class="luxury__type">${product.type}</span>
      </div>
      <button class = "luxury__button" data-id=${product.id} > See more</button> 
    </div>
    `;
    }
    );

    luxProductsDOM.innerHTML = result;
    clickButton();
  }


document.addEventListener("DOMContentLoaded", () => {
  //get all products
  luxuryProducts().then((luxProducts) => displayProducts(luxProducts));
});


const clickButton = () => {
  let buttons = [...document.querySelectorAll(".luxury__button")]
  // console.log("🚀 ~ file: homepg.js:69 ~ clickButton ~ buttons:", buttons)

  buttons.map(button=>{
    button.addEventListener("click",()=>{
      localStorage.setItem("id", button.dataset.id)
      window.location.href="productcard.html"
    })
  })
  
}
