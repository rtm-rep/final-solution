describe('Product Details Page spec', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')

    cy.get('[id="filters"]').contains('Hand Saw').click()

    cy.get('[data-test="filter_completed"]').contains('Wood Saw').click()

    cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Wood Saw')
  })
  it('Verify product details page has corresponding information', () => {
    cy.get('[data-test="unit-price"]').should('be.visible').and('contain', '12.18')

    cy.get('[data-test="product-description"]').should('be.visible').and('contain', 'Quisque quis fermentum ligula')

    cy.get('[class="input-group quantity"]').should('be.visible')
    
    cy.get('[data-test="add-to-cart"]').should('be.visible').and('contain', 'Add to cart')

    cy.get('[data-test="add-to-favorites"]').should('be.visible').and('contain', 'Add to favourites')
  })

  it.only('Verify cart icon after adding product to cart', () => {
    cy.get('[data-test="add-to-cart"]').click()

    cy.get('[class="toast bg-success text-light fade show"]').should('be.visible')

    cy.get('[data-test="nav-cart"]').should('exist').and('be.visible')
  })
})