describe('Product API spec', () => {
  it('Verify GET /products', () => {
    cy.request('GET', '/products').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('Object');

      const firstItem = response.body.data[0];
      expect(firstItem).to.have.property('id');
      expect(firstItem).to.have.property('name').that.is.a('string');
      expect(firstItem).to.have.property('description').that.is.a('string');
      expect(firstItem).to.have.property('price').that.is.a('number');
      expect(firstItem).to.have.property('brand_id').that.is.a('string');
      expect(firstItem).to.have.property('category_id').that.is.a('string');
    })
  })
  it('Verify GET /products/search', () => {
    cy.request('GET', '/products/search?q=Drill%2024V').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('Object');

      const firstItem = response.body.data[0];
      expect(firstItem).to.have.property('name').contain('Cordless Drill 24V');
      expect(firstItem).to.have.property('description').contain('Aenean vel dolor eu erat rutrum dapibus. Aenean consectetur velit in quam pulvinar volutpat. Etiam at laoreet augue. Sed sed diam venenatis, pharetra quam a, consectetur massa. Vivamus purus enim, placerat non augue eu, viverra sagittis purus. Sed dictum massa ac orci posuere, pulvinar dignissim est mattis. Curabitur at convallis ipsum. Donec id arcu vel massa tincidunt porta. Nullam quis accumsan mauris.');
      expect(firstItem).to.have.property('id');
    })
  })
})