class RegistrationPage {
  get loginEmail() {
    return cy.get('[data-test="email"]');
  }
  get loginPassword() {
    return cy.get('[data-test="password"]');
  }
  get loginEmailError() {
    return cy.get('[data-test="email-error"]');
  }
  get loginPasswordError() {
    return cy.get('[data-test="password-error"]');
  }
  get loginBtn() {
    return cy.get('[data-test="login-submit"]');
  }
  get registerLink() {
    return cy.get('[data-test="register-link"]');
  }
  get registrationTitle() {
    return cy.get('[class="container"] h3');
  }
  get firstName() {
    return cy.get('[data-test="first-name"]');
  }
  get lastName() {
    return cy.get('[data-test="last-name"]');
  }
  get birthDate() {
    return cy.get('[data-test="dob"]');
  }
  get address() {
    return cy.get('[data-test="address"]');
  }
  get postcode() {
    return cy.get('[data-test="postcode"]');
  }
  get city() {
    return cy.get('[data-test="city"]');
  }
  get state() {
    return cy.get('[data-test="state"]');
  }
  get country() {
    return cy.get('[data-test="country"]');
  }
  get phone() {
    return cy.get('[data-test="phone"]');
  }
  get email() {
    return cy.get('[data-test="email"]');
  }
  get password() {
    return cy.get('[data-test="password"]');
  }
  get registerBtn() {
    return cy.get('[data-test="register-submit"]');
  }
  get firstNameError() {
    return cy.get('[data-test="first-name-error"]');
  }
  get lastNameError() {
    return cy.get('[data-test="last-name-error"]');
  }
  get birthDateError() {
    return cy.get('[data-test="dob-error"]');
  }
  get addressError() {
    return cy.get('[data-test="address-error"]');
  }
  get postcodeError() {
    return cy.get('[data-test="postcode-error"]');
  }
  get cityError() {
    return cy.get('[data-test="city-error"]');
  }
  get stateError() {
    return cy.get('[data-test="state-error"]');
  }
  get countryError() {
    return cy.get('[data-test="country-error"]');
  }
  get phoneError() {
    return cy.get('[data-test="phone-error"]');
  }
  get emailError() {
    return cy.get('[data-test="email-error"]');
  }
  get passwordError() {
    return cy.get('[data-test="password-error"]');
  }
}

export default RegistrationPage;