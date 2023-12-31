// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit("/");
    cy.get("[data-cy='input_nom']").type("Viviane");
    cy.get("[data-cy='input_mdp']").type("Dubuc");
    cy.get("[data-cy='button_connexion']").click();
});

Cypress.Commands.add('favori', () => {
    cy.get(".lien_details").first().click();
    cy.get("[data-cy='button_favori']").click();
    cy.get("[data-cy='lien_Favoris']").click();
});