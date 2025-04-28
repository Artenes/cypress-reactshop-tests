Cypress.Commands.add('login', (username, password) => {
    // ReactShop has no login, but pretend it did — for now we'll simulate login page visit
    cy.visit('/');
    cy.log(`Simulated login for ${username}`);
});

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.sc-124al1g-4.eeXMBo') // container for all products
        .contains(productName)
        .parents('.sc-124al1g-2')
        .find('button')
        .click();
});
