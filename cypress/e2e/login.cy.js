describe('ReactShop Basic Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Loads the homepage', () => {
        cy.title().should('include', 'React Shopping cart'); //this is case sensitive
        cy.get('.sc-124al1g-4.eeXMBo').should('exist');
    });

    it('Adds a product to the cart', () => {
        cy.addProductToCart('Cropped Stay Groovy off white');
        cy.get('.sc-1h98xa9-3').should('contain', '1');
    });
});
