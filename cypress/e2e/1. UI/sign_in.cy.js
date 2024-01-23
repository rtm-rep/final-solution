import CommonElements from "../../support/page_object/CommonElements"
import RegistrationPage from "../../support/page_object/RegistrationPage";

describe('Sign In page spec', () => {
  const commonElements = new CommonElements();
  const registrationPage = new RegistrationPage();
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')

    commonElements.navSignIn
      .click()
  })
  it('Verify sign in page. Fields validation', () => {
    registrationPage.loginEmail
      .should('be.visible')
    registrationPage.loginPassword
      .should('be.visible')
    registrationPage.loginBtn
      .should('be.visible')
  })

  it('Verify sign in page (negative case). After clicking send with empty fields, errors appeared', () => {
    registrationPage.loginBtn
      .should('be.visible')
      .click()
    registrationPage.loginEmailError
      .should('be.visible')
      .and('contain', 'E-mail is required.')
    registrationPage.loginPasswordError
      .should('be.visible')
      .and('contain', 'Password is required.')
  })
})