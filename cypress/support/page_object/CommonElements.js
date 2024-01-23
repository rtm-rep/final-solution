class CommonElements {
  get navHome() {
    return cy.get('[data-test="nav-home"]');
  }
  get navCategories() {
    return cy.get('[data-test="nav-categories"]');
  }
  get navContact() {
    return cy.get('[data-test="nav-contact"]');
  }
  get navSignIn() {
    return cy.get('[data-test="nav-sign-in"]');
  }
  get navCart() {
    return cy.get('[data-test="nav-cart"]');
  }
  get logo() {
    return cy.get('[id="Layer_1"]');
  }
  get categoryPowerTools() {
    return cy.get('[data-test="nav-power-tools"]');
  }
  get categorySpecialTools() {
    return cy.get('[data-test="nav-special-tools"]');
  }
  get categoryTitle() {
    return cy.get('[data-test="page-title"]');
  }
  get banner() {
    return cy.get('[class="img-fluid"]');
  }
  get filters() {
    return cy.get('[id="filters"]');
  }
  get sort() {
    return cy.get('[data-test="sort"]');
  }
  get productContainer() {
    return cy.get('div [class="container"]');
  }
  get emptyProductContainer() {
    return cy.get('[data-test="category-empty"]');
  }
  get filteredProductContainer() {
    return cy.get('[data-test="filter_completed"]');
  }
  get sortingProductContainerFirstItem() {
    return cy.get('[data-test="sorting_completed"] a[class="card"]:nth-child(1)');
  }
  get searchField() {
    return cy.get('[data-test="search-query"]');
  }
  get searchBtn() {
    return cy.get('[data-test="search-submit"]');
  }
  get containerSearchTitle() {
    return cy.get('[class="col-md-9"]');
  }
  get searchingProductContainerFIrstItem() {
    return cy.get('[data-test="search_completed"] a[class="card"]:nth-child(1)');
  }
  get pagination() {
    return cy.get('app-pagination');
  }
}

export default CommonElements;