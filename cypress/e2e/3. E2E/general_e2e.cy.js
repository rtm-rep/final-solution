import CommonElements from "../../support/page_object/CommonElements"
import ProductDetailsPage from "../../support/page_object/ProductDetailsPage";
import CartPage from "../../support/page_object/CartPage";

describe('Unauthrized user E2E flows spec', () => {
  const commonElements = new CommonElements();
  const productDetailsPage = new ProductDetailsPage();
  const cartPage = new CartPage();
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  it('Verify adding product to favorite and check that error is correct', () => {
    commonElements.filters
      .contains('Hand Saw')
      .click()
    commonElements.filteredProductContainer
      .contains('Wood Saw')
      .click()
    productDetailsPage.productName
      .should('be.visible')
      .and('contain', 'Wood Saw')
    productDetailsPage.addToCart
      .should('be.visible')
      .and('contain', 'Add to cart')
    productDetailsPage.addToFav
      .should('be.visible')
      .and('contain', 'Add to favourites')
      .click()
    productDetailsPage.failToast
      .should('be.visible')
  })

  it('Verify adding product to cart and check successfull message', () => {
    commonElements.filters
      .contains('Hand Saw')
      .click()
    commonElements.filteredProductContainer
      .contains('Wood Saw')
      .click()
    productDetailsPage.productName
      .should('be.visible')
      .and('contain', 'Wood Saw')
    productDetailsPage.addToFav
      .should('be.visible')
      .and('contain', 'Add to favourites')
    productDetailsPage.addToCart
      .should('be.visible')
      .and('contain', 'Add to cart')
      .click()
    productDetailsPage.successToast
      .should('be.visible')
  })

  it('Verify adding product to cart, check data, edit, delete from cart', () => {
    commonElements.filters
      .contains('Hand Saw')
      .click()
    commonElements.filteredProductContainer
      .contains('Wood Saw')
      .click()
    productDetailsPage.productName
      .should('be.visible')
      .and('contain', 'Wood Saw')
    productDetailsPage.addToFav
      .should('be.visible')
      .and('contain', 'Add to favourites')
    productDetailsPage.addToCart
      .should('be.visible')
      .and('contain', 'Add to cart')
      .click()
    productDetailsPage.successToast
      .should('be.visible')
    commonElements.navCart
      .should('exist')
      .and('be.visible')
      .click()
    cartPage.productTitle
      .should('contain', 'Wood Saw')
    cartPage.qty
      .clear()
      .type('2')
    cartPage.foot
      .click()
      .should('contain', '24.36')
    cartPage.remove
      .should('be.visible')
      .click()
    commonElements.navCart
      .should('not.exist')
  })

  it('Verify filtering functionality on main page', () => {
    commonElements.filters
      .contains('Sander')
      .click()
    commonElements.sort
      .select('Price (High - Low)')
    commonElements.sortingProductContainerFirstItem
      .should('contain', '$73.59')
  })

  it('Verify searching functionality', () => {
    commonElements.searchField
      .type('Drill 24V')
    commonElements.searchBtn
      .click()
    commonElements.containerSearchTitle
      .should('contain', 'Searched for: Drill 24V')
    commonElements.searchingProductContainerFIrstItem
      .should('contain', 'Drill 24V')
      .click()
    productDetailsPage.productName
      .should('be.visible')
      .and('contain', 'Drill 24V')
  })
})