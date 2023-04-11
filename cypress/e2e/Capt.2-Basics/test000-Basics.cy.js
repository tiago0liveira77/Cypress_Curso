describe('template spec', () => {
  it('true = true', () => {
    //cy.visit('https://example.cypress.io')
    expect(true).to.equal(true);
  })

  it('5 = 5', () => {
    //cy.visit('https://example.cypress.io')
    expect(5).to.equal(5);
  })
})

describe('Another describe block', () => {
  it('false == false', () => {
    expect(false).to.equal(false);
  })
})