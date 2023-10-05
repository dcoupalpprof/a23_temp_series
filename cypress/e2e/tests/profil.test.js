///<reference types="cypress" />

describe("Profil", () => {
    before(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
    });

    beforeEach(() => {
        cy.login();
    });

    it("Affichage du nom de l'utilisateur", () => {
        cy.get(".profil h1").should('include', 'Viviane');
    });

    it("Affichage du nombre de séries favorites", () => {
        cy.favori();
        cy.get(".profil p").should('have.text', '1 ');
    });
});