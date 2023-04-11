describe('Browser Actions', () => {
    beforeEach(() => {
        cy.visit('https://example.com/');
    })

    it('check element', () => {
        cy.get('h1').should('be.visible');
    });

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });
  })
  