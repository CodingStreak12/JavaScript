const divApp = document.getElementById("app");
class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}
class shoppingCart {
  items = [];
  addProduct(product) {
    this.items.push(product);
    console.log(this.items);
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    this.totalOutput.innerHTML = `<h2>Total \$${total}</h2>`;
  }
  render() {
    const sectionElement = document.createElement("section");
    sectionElement.classList.add("cart");
    sectionElement.innerHTML = `
        <h2>Total \$${0}</h2>
        <button>Order Now</button>
        `;
    this.totalOutput = sectionElement.querySelector("h2");
    return sectionElement;
  }
}
class ProductList {
  product = [
    new Product(
      "Pillow",
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/347866-Best-Pillows-for-Side-Sleepers_Header-1.jpg?w=1155&h=1528",
      14.99,
      "The best pillow in the market"
    ),
    new Product(
      "BedSheet",
      "https://www.ikea.com/global/assets/navigation/images/childrens-bed-linen-18776.jpeg?imwidth=500",
      325.99,
      "This is the ludo bedsheet"
    ),
  ];
  showToScreen() {
    const prodList = document.createElement("ul");
    prodList.classList.add("product-list");
    for (const prod of this.product) {
      const renderObject = new render(prod);
      const prodEl = renderObject.renderProduct();
      prodList.append(prodEl);
    }
    return prodList;
  }
}
class render {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    console.log("Product adding to the cart...");
    App.addProdutToCart(this.product);
  }

  renderProduct() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
            <img src = ${this.product.imageUrl}/>
            <div class = "product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
    const button = prodEl.querySelector("button");
    button.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}
class Shop {
  render() {
    this.cart = new shoppingCart();
    divApp.append(this.cart.render());
    const productList = new ProductList();
    divApp.append(productList.showToScreen());
  }
}
class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProdutToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
