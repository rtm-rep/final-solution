class CartPage {
  get productTitle() {
    return cy.get('[class="product-title"]');
  }
  get qty() {
    return cy.get('[class="form-control quantity"]');
  }
  get foot() {
    return cy.get('tfoot');
  }
  get remove() {
    return cy.get('[class="fa fa-remove"]');
  }
}

export default CartPage;