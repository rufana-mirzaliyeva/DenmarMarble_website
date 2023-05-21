/* ---PAVER PRODUCTS--- */

const ProductsDOM = document.querySelector(".product__container");

//const pageName = document.querySelector('#page_name');
//console.log(pageName.dataset.page)


//getting the featured products
const Products = async() => {
    try {
      let result = await fetch("items.json");
      let data = await result.json();
      data = data.items;
      let products = data.filter((items) => items.product__type === page || items.featured == page);
      products = products.map((item) => {
        const { title, id, image } = item;
        return { title, id, image };
      });
   displayProducts(products);
    } catch (error) {
      console.log(error);
    }

  }

const displayProducts = (products) => {
    let result = "";

    products.forEach((product) => {
      result += `
      <div class="product__card" ${product.id}>
        <img src=${product.image[0]} alt="product image" class="product__img">
      <div class="product__data"> 
          <h3 class="product__title">${product.title}</h3>
      </div>
      
      <button class = "product__button" data-id=${product.id}> See more</button> 
    
      
    </div>
    `;
    });

    ProductsDOM.innerHTML = result;

    clickButton();
  }


  



const clickButton = () => {
  let buttons = [...document.querySelectorAll(".product__button")];
  buttons.map(button => {
    button.addEventListener("click",()=>{
      localStorage.setItem("id", button.dataset.id)
      window.location.href="productcard.html"
    })
  })
  
}
