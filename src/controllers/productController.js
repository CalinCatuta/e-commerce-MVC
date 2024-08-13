import ProductModel from "../models/productModel.js";
import ProductView from "../views/productView.js";

export default class ProductController {
  constructor() {
    this.productModel = new ProductModel();
    this.productView = new ProductView();
  }

  // Initialize the controller
  async init() {
    await this.productModel.loadProducts();
    this.productView.renderProducts(this.productModel.getAllProducts());
  }
}
