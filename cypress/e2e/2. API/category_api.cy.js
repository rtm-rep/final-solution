describe('Category API spec', () => {
  it('Verify GET /categories', () => {
    cy.request('GET', '/categories').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.length).to.be.at.least(1);
      expect(response.body).to.be.an('array');

      const firstItem = response.body[0];
      expect(firstItem).to.have.property('id').that.is.a('string');
      expect(firstItem).to.have.property('name').that.is.a('string');
      expect(firstItem).to.have.property('slug').that.is.a('string');
      expect(firstItem).to.have.property('parent_id').that.is.null;
    })
  })
  it('Verify GET /categories/search', () => {
    cy.request('GET', '/categories/search?q=saw').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.length).to.be.at.least(1);
      expect(response.body).to.be.an('array');

      const firstItem = response.body[0];
      expect(firstItem).to.have.property('id').that.is.a('string');
      expect(firstItem).to.have.property('name').that.is.a('string');
      expect(firstItem).to.have.property('slug').that.is.a('string');
      expect(firstItem).to.have.property('parent_id').that.is.a('string');
    })
  })
})