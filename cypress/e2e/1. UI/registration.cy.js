describe('Registration form spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')

    cy.get('[data-test="nav-sign-in"]').click()

    cy.get('[data-test="register-link"]').click()

    cy.get('[class="container"] h3').should('contain', 'Customer registration')
  })
  it('Verify registration form. Fields validation', () => {
    cy.get('[data-test="first-name"]').should('be.visible')
    cy.get('[data-test="last-name"]').should('be.visible')
    cy.get('[data-test="dob"]').should('be.visible')
    cy.get('[data-test="address"]').should('be.visible')
    cy.get('[data-test="postcode"]').should('be.visible')
    cy.get('[data-test="city"]').should('be.visible')
    cy.get('[data-test="state"]').should('be.visible')
    cy.get('[data-test="country"]').should('be.visible')
    cy.get('[data-test="phone"]').should('be.visible')
    cy.get('[data-test="email"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="register-submit"]').should('be.visible')
  })

  it('Verify registration form (negative case). After clicking send with empty fields, errors appeared', () => {
    cy.get('[data-test="register-submit"]').should('be.visible').click()

    cy.get('[data-test="first-name-error"]').should('be.visible').and('contain', 'First name is required.')
    cy.get('[data-test="last-name-error"]').should('be.visible').and('contain', 'Last name is required.')
    cy.get('[data-test="dob-error"]').should('be.visible').and('contain', 'Date of Birth is required.')
    cy.get('[data-test="address-error"]').should('be.visible').and('contain', 'Address is required.')
    cy.get('[data-test="postcode-error"]').should('be.visible').and('contain', 'Postcode is required.')
    cy.get('[data-test="city-error"]').should('be.visible').and('contain', 'City is required.')
    cy.get('[data-test="state-error"]').should('be.visible').and('contain', 'State is required.')
    cy.get('[data-test="country-error"]').should('be.visible').and('contain', 'Country is required.')
    cy.get('[data-test="phone-error"]').should('be.visible').and('contain', 'Phone is required.')
    cy.get('[data-test="email-error"]').should('be.visible').and('contain', 'E-mail is required.')
    cy.get('[data-test="password-error"]').should('be.visible').and('contain', 'Password is required.')
  })
})