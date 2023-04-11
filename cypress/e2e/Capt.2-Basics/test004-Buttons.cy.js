describe('Browser Actions', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html');
    })

    it('check url', () => {
        cy.url().should('include', 'index.html');
    });

    it('click travel category', () => {
        cy.get('a').contains('Travel').click();
        cy.get('h1').contains('Travel');
    });

  })
  