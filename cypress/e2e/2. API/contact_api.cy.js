describe('Contact API spec', () => {
  it('Verify POST /contact', () => {
    const contacts = {
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@doe.example",
      "subject": "website",
      "message": "Something is wrong with the website."
    }
    
    cy.request('POST', '/messages', contacts).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('Object');
      expect(response.body).to.have.property('email').that.is.a('string');
      expect(response.body).to.have.property('subject').that.is.a('string');
      expect(response.body).to.have.property('message').that.is.a('string');
      expect(response.body).to.have.property('id').that.is.a('string');
      expect(response.body).to.have.property('created_at').that.is.a('string');
    })
  })
})