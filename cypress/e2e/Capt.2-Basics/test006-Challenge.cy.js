describe('Browser Actions', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html');
    })

    it('check price of book poetry Olio', () => {
        cy.url().should('include', 'index.html');
        cy.get('a').contains('Poetry').click();
        cy.get('h1').contains('Poetry');
        //cy.get('.product_pod').should('length', 11);
        cy.get('a').contains('Olio').click();
        cy.get('.price_color').contains('23.88');
    });
  })
  