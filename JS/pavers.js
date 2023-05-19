/* ---PAVER PRODUCTS--- */

const paverProductsDOM = document.querySelector(".paver__container");
//const pageName = document.querySelector('#page_name');
//console.log(pageName.dataset.page)

//getting the featured products
const Products = async() => {
    try {
      let result = await fetch("items.json");
      let data = await result.json();
      data = data.items;
      let paver = data.filter((items) => items.product__type == page);
      paver = paver.map((item) => {
        const { title, id, image } = item;
        return { title, id, image };
      });
   displayProducts(paver);
    } catch (error) {
      console.log(error);
    }
  }

const displayProducts = (paver) => {
    let result = "";

    paver.forEach((product) => {
      result += `
      <div class="paver__card" ${product.id}>
        <img src=${product.image[0]} alt="product image" class="paver__img">
      <div class="paver__data"> 
          <h3 class="paver__title">${product.title}</h3>
      </div>
      
      <button class = "paver__button" data-id=${product.id}> See more</button> 
    
      
    </div>
    `;
    });

    paverProductsDOM.innerHTML = result;
    clickButton();
  }




const clickButton = () => {
  let buttons = [...document.querySelectorAll(".paver__button")]
  // console.log("🚀 ~ file: homepg.js:69 ~ clickButton ~ buttons:", buttons)

  buttons.map(button=>{
    button.addEventListener("click",()=>{
      localStorage.setItem("id", button.dataset.id)
      window.location.href="productcard.html"
    })
  })
  
}
