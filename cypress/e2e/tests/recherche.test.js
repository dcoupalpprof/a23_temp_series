///<reference types="cypress" />

describe("Recherche", () => {
    before(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
    });

    beforeEach(() => {
        cy.login();
    });

    it('Affichage complet des résultats de recherche', () => {
        cy.get("[data-cy='input_recherche']").first().type("g");
        cy.get(".recherche [data-cy=button_recherche]").first().click();
        cy.get(".lien_details").should('have.length.above', 0);
    });

    it('Affichage fonctionnel des détails depuis la liste', () => {
        cy.get("[data-cy='input_recherche']").first().type("Sex Education");
        cy.get(".recherche [data-cy=button_recherche]").first().click();
        cy.get(".lien_details").first().click();
        cy.get(".entete h1").should("have.text", "Sex Education");
    });
});