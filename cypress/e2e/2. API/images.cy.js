describe('Images API spec', () => {
  it('Verify GET /images', () => {
    cy.request('GET', '/images').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('Array');

      const firstItem = response.body[0];
      expect(firstItem).to.have.property('by_name').that.is.a('string');
      expect(firstItem).to.have.property('by_url').that.is.a('string');
      expect(firstItem).to.have.property('source_name').that.is.a('string');
      expect(firstItem).to.have.property('source_url').that.is.a('string');
      expect(firstItem).to.have.property('file_name').that.is.a('string');
      expect(firstItem).to.have.property('title').that.is.a('string');
      expect(firstItem).to.have.property('id').that.is.a('string');
    })
  })
})