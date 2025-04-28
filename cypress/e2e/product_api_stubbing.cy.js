describe('Product API Stubbing in ReactShop', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/products.json', {
            products: [
                {
                    "availableSizes": [
                        "X",
                        "L",
                        "XL",
                        "XXL"
                    ],
                    "currencyFormat": "$",
                    "currencyId": "USD",
                    "description": "14/15 s/nº",
                    "id": 68,
                    "installments": 3,
                    "isFreeShipping": true,
                    "price": 19.99,
                    "sku": 8552515751438644,
                    "style": "Cool Mocked Style",
                    "title": "Mocked Product 1"
                },
            ],
        }).as('getProducts');

        cy.visit('/');
    });

    it('displays mocked product from intercepted API', () => {
        cy.wait('@getProducts');

        // Validate the mocked product appears
        cy.get('.sc-124al1g-2') // container holding products
            .should('contain', 'Mocked Product 1')
            .and('contain', '$19.99');
    });
});
