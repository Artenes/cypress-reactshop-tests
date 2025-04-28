describe('ReactShop Checkout Flow', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('adds multiple products and completes checkout', () => {
        // Add products
        cy.addProductToCart('Cropped Stay Groovy off white');
        cy.addProductToCart('Basic Cactus White T-shirt');

        // Close cart sidebar
        cy.get('.sc-1h98xa9-0.gFkyvN').click(); //Since it opens automatically after adding an item

        // Open Cart
        cy.get('.sc-1h98xa9-2.fGgnoG').click(); // Cart button top right

        // Verify both products are in cart
        cy.get('.sc-11uohgb-0').should('contain', 'Cropped Stay Groovy off white');
        cy.get('.sc-11uohgb-0').should('contain', 'Basic Cactus White T-shirt');

        // Check quantity
        cy.get('.sc-1h98xa9-3').should('contain', '2'); // Cart count badge

        // Checkout
        cy.contains('Checkout').click();

        // Verify right amount is displayed in alert
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Checkout - Subtotal: $ 24.15');
        });

    });

    it('shows empty cart when no products are added', () => {
        // Open Cart
        cy.get('.sc-1h98xa9-0.gFkyvN').click();

        // Verify empty cart message
        cy.get('.sc-7th5t8-0').should('contain', 'Add some products in the cart :)');
    });
});
