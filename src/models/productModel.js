export default class ProductModel {
  constructor() {
    this.products = [];
  }

  // Load product data from JSON file
  async loadProducts() {
    try {
      const response = await fetch("data/data.json");
      this.products = await response.json();
    } catch (error) {
      console.error("Failed to load product data:", error);
    }
  }

  // Get all products
  getAllProducts() {
    return this.products;
  }

  // Find product by ID
  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }
}
