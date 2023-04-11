describe('Browser Actions', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html');
    })

    it('check number of travel books', () => {
        cy.url().should('include', 'index.html');
        cy.get('a').contains('Travel').click();
        cy.get('h1').contains('Travel');
        //cy.get('.product_pod').should('length', 11);
        cy.get('ol').find('li').should('have.length', 11);
    });
  })
  