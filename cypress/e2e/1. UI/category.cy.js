import CommonElements from "../../support/page_object/CommonElements"

describe('Category Page spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  const commonElements = new CommonElements();
  it('Verify some category page (e.g. Power Tools)', () => {
    commonElements.navCategories
      .click()
    commonElements.categoryPowerTools
      .click()
    commonElements.categoryTitle
      .invoke('text')
      .should('contain', 'Power Tools')
    commonElements.banner
      .should('not.exist')
    commonElements.filters
      .should('contain', 'Sort')
      .and('contain', 'Filters')
      .and('contain', 'Power Tools')
    commonElements.productContainer
      .should('be.visible')
  })

  it('Verify category empty page (e.g. Special Tools)', () => {
    commonElements.navCategories
      .click()
    commonElements.categorySpecialTools
      .click()
    commonElements.categoryTitle
      .invoke('text')
      .should('contain', 'Special Tools')
    commonElements.banner
      .should('not.exist')
    commonElements.emptyProductContainer
      .should('contain', 'There are no products available yet.')
  })
})