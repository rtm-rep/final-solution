class ProductDetailsPage {
  get productName() {
    return cy.get('[data-test="product-name"]');
  }
  get productPrice() {
    return cy.get('[data-test="unit-price"]');
  }
  get productDescription() {
    return cy.get('[data-test="product-description"]');
  }
  get productQtyModule() {
    return cy.get('[class="input-group quantity"]');
  }
  get addToCart() {
    return cy.get('[data-test="add-to-cart"]');
  }
  get addToFav() {
    return cy.get('[data-test="add-to-favorites"]');
  }
  get successToast() {
    return cy.get('[class="toast bg-success text-light fade show"]');
  }
  get failToast() {
    return cy.get('[class="toast bg-danger text-light fade show"]');
  }
}

export default ProductDetailsPage;