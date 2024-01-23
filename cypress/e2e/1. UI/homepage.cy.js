import CommonElements from "../../support/page_object/CommonElements"

describe('Home Page spec', () => {
  
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  const commonElements = new CommonElements();
  it('Verify menu nav buttons', () => {
    commonElements.navHome
      .invoke('text')
      .should('contain', 'Home')
    commonElements.navCategories
      .invoke('text')
      .should('contain', 'Categories')
    commonElements.navContact
      .invoke('text')
      .should('contain', 'Contact')
    commonElements.navSignIn
      .invoke('text')
      .should('contain', 'Sign in')
  })

  it('Verify logo is existing', () => {
    commonElements.logo
      .should('be.visible')
  })

  it('Verify banner is visible', () => {
    commonElements.banner
      .should('be.visible')
  })

  it('Verify filter section of homepage', () => {
    commonElements.filters
      .should('contain', 'Sort')
      .and('contain', 'Price Range')
      .and('contain', 'Search')
      .and('contain', 'Filters')
  })

  it('Verify products proposes existing on home page', () => {
    commonElements.productContainer
      .should('be.visible')
  })

  it('Verify pagination', () => {
    commonElements.pagination
      .should('be.visible')
  })
})