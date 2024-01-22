describe('Home Page spec', () => {
  
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  
  it('Verify menu nav buttons', () => {
    cy.get('[data-test="nav-home"]').invoke('text').should('contain', 'Home')

    cy.get('[data-test="nav-categories"]').invoke('text').should('contain', 'Categories')

    cy.get('[data-test="nav-contact"]').invoke('text').should('contain', 'Contact')

    cy.get('[data-test="nav-sign-in"]').invoke('text').should('contain', 'Sign in')
  })

  it('Verify logo is existing', () => {
    cy.get('[id="Layer_1"]').should('be.visible')
  })

  it('Verify banner is visible', () => {
    cy.get('[class="img-fluid"]').should('be.visible')
  })

  it('Verify filter section of homepage', () => {
    cy.get('[id="filters"]').should('contain', 'Sort').and('contain', 'Price Range').and('contain', 'Search').and('contain', 'Filters')
  })

  it('Verify products proposes existing on home page', () => {
    cy.get('div [class="container"]').should('be.visible')
  })

  it('Verify pagination', () => {
    cy.get('app-pagination').should('be.visible')
  })
})