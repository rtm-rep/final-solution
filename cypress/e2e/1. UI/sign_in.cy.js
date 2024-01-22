describe('Sign In page spec', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')

    cy.get('[data-test="nav-sign-in"]').click()
  })
  it('Verify sign in page. Fields validation', () => {
    cy.get('[data-test="email"]').should('be.visible')

    cy.get('[data-test="password"]').should('be.visible')

    cy.get('[data-test="login-submit"]').should('be.visible')
  })

  it('Verify sign in page (negative case). After clicking send with empty fields, errors appeared', () => {
    cy.get('[data-test="login-submit"]').should('be.visible').click()

    cy.get('[data-test="email-error"]').should('be.visible').and('contain', 'E-mail is required.')

    cy.get('[data-test="password-error"]').should('be.visible').and('contain', 'Password is required.')
  })

  it('Verify sign in page (positive case). Check observation of My Account page', () => {
    //sign in first step

    cy.get('[data-test="page-title"]').invoke('text').should('be.visible').and('contain', 'My account')
  })

  it('Verify Forgot Password form. Fields and button', () => {
    
    
  })

  it('Verify Forgot Password form (negative case). After clicking send with empty fields, errors appeared', () => {
    
  })
})