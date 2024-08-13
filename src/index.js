import ProductController from "./controllers/productController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productController = new ProductController();
  productController.init();
});
