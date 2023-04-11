describe('Browser Actions', () => {
    beforeEach(() => {
        cy.visit('https://example.com/');
    })

    it('check element', () => {
        cy.get('h1').should('be.visible');
    });

    it('wait 3 seconds', () => {
        cy.wait(3000)
    });

    it('pause execution', () => {
        cy.pause()
    });

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });
  })
  