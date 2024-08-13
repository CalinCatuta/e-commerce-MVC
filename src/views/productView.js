import { createElement } from "../utils/domUtils.js";

export default class ProductView {
  constructor() {
    this.productContainer = document.getElementById("product-list");
  }

  // Render all products
  renderProducts(products) {
    this.productContainer.innerHTML = ""; // Clear existing content

    products.forEach((product) => {
      const card = this.createProductCard(product);
      this.productContainer.appendChild(card);
    });
  }

  // Create a product card
  createProductCard(product) {
    const card = createElement("div", { className: "product-card" });

    const image = createElement("img", {
      src: product.image_url,
      alt: product.name,
    });
    const name = createElement("h3", { innerText: product.name });
    const description = createElement("p", { innerText: product.description });
    const price = createElement("span", {
      innerText: `$${product.price.toFixed(2)}`,
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    return card;
  }
}
