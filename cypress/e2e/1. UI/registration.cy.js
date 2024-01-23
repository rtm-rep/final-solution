import CommonElements from "../../support/page_object/CommonElements"
import RegistrationPage from "../../support/page_object/RegistrationPage";

describe('Registration form spec', () => {
  const commonElements = new CommonElements();
  const registrationPage = new RegistrationPage();
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')

    commonElements.navSignIn
      .click()
    registrationPage.registerLink
      .click()
    registrationPage.registrationTitle
      .should('contain', 'Customer registration')
  })
  it('Verify registration form. Fields validation', () => {
    registrationPage.firstName
      .should('be.visible')
    registrationPage.lastName
      .should('be.visible')
    registrationPage.birthDate
      .should('be.visible')
    registrationPage.address
      .should('be.visible')
    registrationPage.postcode
      .should('be.visible')
    registrationPage.city
      .should('be.visible')
    registrationPage.state
      .should('be.visible')
    registrationPage.country
      .should('be.visible')
    registrationPage.phone
      .should('be.visible')
    registrationPage.email
      .should('be.visible')
    registrationPage.password
      .should('be.visible')
    registrationPage.registerBtn
      .should('be.visible')
  })

  it('Verify registration form (negative case). After clicking send with empty fields, errors appeared', () => {
    registrationPage.registerBtn
      .should('be.visible')
      .click()
    registrationPage.firstNameError
      .should('be.visible')
      .and('contain', 'First name is required.')
    registrationPage.lastNameError
      .should('be.visible')
      .and('contain', 'Last name is required.')
    registrationPage.birthDateError
      .should('be.visible')
      .and('contain', 'Date of Birth is required.')
    registrationPage.addressError
      .should('be.visible')
      .and('contain', 'Address is required.')
    registrationPage.postcodeError
      .should('be.visible')
      .and('contain', 'Postcode is required.')
    registrationPage.cityError
      .should('be.visible')
      .and('contain', 'City is required.')
    registrationPage.stateError
      .should('be.visible')
      .and('contain', 'State is required.')
    registrationPage.countryError
      .should('be.visible')
      .and('contain', 'Country is required.')
    registrationPage.phoneError
      .should('be.visible')
      .and('contain', 'Phone is required.')
    registrationPage.emailError
      .should('be.visible')
      .and('contain', 'E-mail is required.')
    registrationPage.passwordError
      .should('be.visible')
      .and('contain', 'Password is required.')
  })
})