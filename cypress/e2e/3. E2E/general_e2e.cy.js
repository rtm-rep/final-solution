describe('Unauthrized user E2E flows spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  it('Verify adding product to favorite and check that error is correct', () => {
    cy.get('[id="filters"]').contains('Hand Saw').click()

    cy.get('[data-test="filter_completed"]').contains('Wood Saw').click()

    cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Wood Saw')
    
    cy.get('[data-test="add-to-cart"]').should('be.visible').and('contain', 'Add to cart')

    cy.get('[data-test="add-to-favorites"]').should('be.visible').and('contain', 'Add to favourites').click()

    cy.get('[class="toast bg-danger text-light fade show"]').should('be.visible')
  })

  it('Verify adding product to cart and check successfull message', () => {
    cy.get('[id="filters"]').contains('Hand Saw').click()

    cy.get('[data-test="filter_completed"]').contains('Wood Saw').click()

    cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Wood Saw')

    cy.get('[data-test="add-to-favorites"]').should('be.visible').and('contain', 'Add to favourites')
    
    cy.get('[data-test="add-to-cart"]').should('be.visible').and('contain', 'Add to cart').click()

    cy.get('[class="toast bg-success text-light fade show"]').should('be.visible')
  })

  it('Verify adding product to cart, check data, edit, delete from cart', () => {
    cy.get('[id="filters"]').contains('Hand Saw').click()

    cy.get('[data-test="filter_completed"]').contains('Wood Saw').click()

    cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Wood Saw')

    cy.get('[data-test="add-to-favorites"]').should('be.visible').and('contain', 'Add to favourites')
    
    cy.get('[data-test="add-to-cart"]').should('be.visible').and('contain', 'Add to cart').click()

    cy.get('[class="toast bg-success text-light fade show"]').should('be.visible')

    cy.get('[data-test="nav-cart"]').should('exist').and('be.visible').click()

    cy.get('[class="product-title"]').should('contain', 'Wood Saw')

    cy.get('[class="form-control quantity"]').clear().type('2')

    cy.get('tfoot').click().should('contain', '24.36')

    cy.get('[class="fa fa-remove"]').should('be.visible').click()

    cy.get('[data-test="nav-cart"]').should('not.exist')
  })

  it('Verify filtering functionality on main page', () => {
    cy.get('[id="filters"]').contains('Sander').click()

    cy.get('[data-test="sort"]').select('Price (High - Low)')

    cy.get('[data-test="sorting_completed"] a[class="card"]:nth-child(1)').should('contain', '$73.59')
  })

  it('Verify searching functionality', () => {
    cy.get('[data-test="search-query"]').type('Drill 24V')

    cy.get('[data-test="search-submit"]').click()

    cy.get('[class="col-md-9"]').should('contain', 'Searched for: Drill 24V')

    cy.get('[data-test="search_completed"] a[class="card"]:nth-child(1)').should('contain', 'Drill 24V').click()

    cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Drill 24V')
  })
})