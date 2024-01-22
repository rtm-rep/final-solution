describe('Category Page spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  it('Verify some category page (e.g. Power Tools)', () => {
    cy.get('[data-test="nav-categories"]').click()

    cy.get('[data-test="nav-power-tools"]').click()

    cy.get('[data-test="page-title"]').invoke('text').should('contain', 'Power Tools')

    cy.get('[class="img-fluid"]').should('not.exist')

    cy.get('[id="filters"]').should('contain', 'Sort').and('contain', 'Filters').and('contain', 'Power Tools')

    cy.get('div [class="container"]').should('be.visible')
  })

  it('Verify category empty page (e.g. Special Tools)', () => {
    cy.get('[data-test="nav-categories"]').click()

    cy.get('[data-test="nav-special-tools"]').click()

    cy.get('[data-test="page-title"]').invoke('text').should('contain', 'Special Tools')

    cy.get('[class="img-fluid"]').should('not.exist')

    cy.get('[data-test="category-empty"]').should('contain', 'There are no products available yet.')
  })
})