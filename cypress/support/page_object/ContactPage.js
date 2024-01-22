import ContactForm from "./ContactForm"

class ContactPage {

  ContactForm = new ContactForm();

  get contactNavButton() {
    return cy.get('[data-test="nav-contact"]')
  }

  get contactPageHeader() {
    return cy.get('h3')
  }

  get sendFormBox() {
    return cy.get('app-contact')
  }

  open() {
    cy.visit('https://practicesoftwaretesting.com/')
  }
}

export default ContactPage;