describe('Register and login', () => {
  it('Verify Register and login', () => {
    
    cy.request()
    
    cy.request('POST', '/users/register', {
      "first_name": "Test",
      "last_name": "User",
      "address": "Street 1",
      "city": "City",
      "state": "State",
      "country": "Country",
      "postcode": "1234AA",
      "phone": "0987654321",
      "dob": "1970-01-01",
      "email": "testuser@doe.example",
      "password": "pass123"
    }).should((response) => {
      expect(response.status).to.equal(201)
    })
  })
})