
# Cypress E2E Tests for ReactShop 🛒

This project demonstrates a sample End-to-End (E2E) testing using [Cypress](https://www.cypress.io/) against a live React e-commerce application: [React Shopping Cart](https://react-shopping-cart-67954.firebaseapp.com/). Note that tests might fail due to changes made to test website.

It includes:
- E2E UI automation
- API stubbing with `cy.intercept()`
- Dynamic content handling
- Custom Cypress commands
- Clean project structure

## Technologies Used

- Cypress v13+
- JavaScript (ES6)
- Mochawesome Reports (optional)

## Project Structure

```
cypress-reactshop-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── checkout_flow.cy.js
│   │   └── product_api_stubbing.cy.js
│   ├── fixtures/
│   │   └── users.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/cypress-reactshop-tests.git
cd cypress-reactshop-tests
```

2. Install dependencies:

```bash
npm install
```

3. Open Cypress Test Runner:

```bash
npx cypress open
```

4. Run tests through the Cypress UI.

---

## Running Tests

### Open Cypress UI (interactive mode):

```bash
npx cypress open
```
Select "E2E Testing", choose your browser, and pick a spec file to run.

### Headless mode (terminal):

```bash
npx cypress run
```

Run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## Tests Included

- **Login Test** (`login.cy.js`): Load site, basic homepage validations
- **Checkout Flow Test** (`checkout_flow.cy.js`): Add products to cart, simulate checkout
- **API Stubbing Test** (`product_api_stubbing.cy.js`): Mock server response for products using `cy.intercept()`

---

## Reporting (Optional)

If you have Mochawesome installed, Cypress will generate a beautiful HTML report after running tests.

To install:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-mochawesome-reporter
```

Reports are generated automatically under the `reports/` folder.

---

## Key Features

- Custom Cypress Commands (`cy.login`, `cy.addProductToCart`)
- API Interception and Response Mocking

---

## Future Improvements

- Add visual testing (e.g., Percy, Happo)
- Expand API failure simulation scenarios
- Set up GitHub Actions for automatic Cypress runs on every pull request

---

## Author
Artenes Junior Gomes Nogueira

- GitHub: https://github.com/Artenes
- LinkedIn: https://linkedin.com/in/artenes

---

## License

This project is licensed under the MIT License.