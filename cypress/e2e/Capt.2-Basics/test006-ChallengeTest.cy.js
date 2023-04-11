describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000});
        cy.url().should('include', 'index.html');
    });

    it('should click poetry category', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000});
        cy.url().should('include', 'index.html');
        cy.get('a').contains('Poetry').click();
        cy.get('h1').contains('Poetry');
    });

    it('should click on olio book', () => {
        cy.get('a').contains('Olio').click();
    });

    it('should have correct price 23.88', () => {
        cy.get('.price_color').contains('23.88');
    });

  })
  