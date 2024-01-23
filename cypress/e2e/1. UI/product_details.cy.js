import CommonElements from "../../support/page_object/CommonElements"
import ProductDetailsPage from "../../support/page_object/ProductDetailsPage";

describe('Product Details Page spec', () => {
  const commonElements = new CommonElements();
  const productDetailsPage = new ProductDetailsPage();
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')

    commonElements.filters
      .contains('Hand Saw')
      .click()
    commonElements.filteredProductContainer
      .contains('Wood Saw')
      .click()
    productDetailsPage.productName
      .should('be.visible')
      .and('contain', 'Wood Saw')
  })
  it('Verify product details page has corresponding information', () => {
    productDetailsPage.productPrice
      .should('be.visible')
      .and('contain', '12.18')
    productDetailsPage.productDescription
      .should('be.visible')
      .and('contain', 'Quisque quis fermentum ligula')
    productDetailsPage.productQtyModule
      .should('be.visible')
    productDetailsPage.addToCart
      .should('be.visible')
      .and('contain', 'Add to cart')
    productDetailsPage.addToFav
      .should('be.visible')
      .and('contain', 'Add to favourites')
  })

  it('Verify cart icon after adding product to cart', () => {
    productDetailsPage.addToCart
      .click()
    productDetailsPage.successToast
      .should('be.visible')
    commonElements.navCart
      .should('exist')
      .and('be.visible')
  })
})