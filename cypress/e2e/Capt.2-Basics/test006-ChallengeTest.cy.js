

describe('Testes a books.toscrape', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html');
    })
    it('should check URL', () => {
        cy.url().should('include', 'index.html');
    });
    context('Verificar Preço do livro "Olio"', () => {
        

        it('should click poetry category', () => {
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
})
  