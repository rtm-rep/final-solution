describe('My Account page spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')
  })
  it('Verify menu buttons', () => {
    cy.get('[data-test="nav-user-menu"]').should('be.visible')

    cy.get('[data-test="page-title"]').invoke('text').should('be.visible').and('contain', 'My account')
  })

  it('Verify profile page of my account', () => {
    cy.get('[data-test="nav-profile"]').should('be.visible').click()

    cy.get('[data-test="first-name"]').should('be.visible')
    cy.get('[data-test="last-name"]').should('be.visible')
    cy.get('[data-test="address"]').should('be.visible')
    cy.get('[data-test="postcode"]').should('be.visible')
    cy.get('[data-test="city"]').should('be.visible')
    cy.get('[data-test="state"]').should('be.visible')
    cy.get('[data-test="country"]').should('be.visible')
    cy.get('[data-test="phone"]').should('be.visible')
    cy.get('[data-test="email"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
  })
})