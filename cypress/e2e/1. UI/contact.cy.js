import ContactForm from "../../support/page_object/ContactForm"
import ContactPage from "../../support/page_object/ContactPage"

describe('Contact page spec', () => {
  
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  const contactForm = new ContactForm();
  const contactPage = new ContactPage();
  it('Verify UI of contact form. Name, fields, send button', () => {
    contactPage.contactNavButton.click()
    contactPage.contactPageHeader.contains('Contact')
    
    contactPage.contactNavButton.click()
    
    contactPage.contactPageHeader.contains('Contact')

    contactForm.firstName.should('be.visible')

    contactForm.lastName.should('be.visible')

    contactForm.emailAddress.should('be.visible')

    contactForm.subject.should('be.visible')

    contactForm.message.should('be.visible')

    contactForm.sendButton.should('be.visible')
  })

  it('Verify UI of contact form (negative case). After clicking send with empty fields, errors appeared', () => {
    contactPage.contactNavButton.click()
    contactPage.contactPageHeader.contains('Contact')
    
    contactForm.sendButton.click()

    contactForm.firstNameError.should('be.visible').and('contain', 'First name is required')

    contactForm.lastNameError.should('be.visible').and('contain', 'Last name is required')

    contactForm.emailAddressError.should('be.visible').and('contain', 'Email is required')

    contactForm.subjectError.should('be.visible').and('contain', 'Subject is required')

    contactForm.messageError.should('be.visible').and('contain', 'Message is required')
  })

  it('Verify UI of contact form (success case). Confirmation page', () => {
    contactPage.contactNavButton.click()
    contactPage.contactPageHeader.contains('Contact')

    contactPage.ContactForm.fill({
      firstName: 'John',
      lastName: 'Dou',
      emailAddress: 'johndou@gmail.com',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    });

    contactPage.ContactForm.subject.select('Status of my order');

    contactPage.ContactForm.sendButton.click()

    contactPage.sendFormBox.contains('Thanks for your message! We will contact you shortly.')
  })
})