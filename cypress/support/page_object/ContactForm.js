class ContactForm {

  get firstName() {
    return cy.get('[data-test="first-name"]')
  }

  get lastName() {
    return cy.get('[data-test="last-name"]')
  }

  get emailAddress() {
    return cy.get('[data-test="email"]')
  }

  get subject() {
    return cy.get('[data-test="subject"]')
  }
  
  get message() {
    return cy.get('[data-test="message"]')
  }

  get sendButton() {
    return cy.get('[data-test="contact-submit"]')
  }

  get firstNameError() {
    return cy.get('[data-test="first-name-error"]')
  }

  get lastNameError() {
    return cy.get('[data-test="last-name-error"]')
  }

  get emailAddressError() {
    return cy.get('[data-test="email-error"]')
  }

  get subjectError() {
    return cy.get('[data-test="subject-error"]')
  }

  get messageError() {
    return cy.get('[data-test="message-error"]')
  }

  fill(options) {
    if (options.firstName) {
      this.firstName.type(options.firstName);
    }
    if (options.lastName) {
      this.lastName.type(options.lastName);
    }
    if (options.emailAddress) {
      this.emailAddress.type(options.emailAddress);
    }
    if (options.message) {
      this.message.type(options.message);
    }
  }
}

export default ContactForm;