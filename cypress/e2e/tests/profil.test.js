///<reference types="cypress" />

describe("Profil", () => {
    beforeEach(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
        cy.login();
    });

    it("Affichage du nom de l'utilisateur", () => {
        cy.get(".profil h1").should('have.text', 'Viviane');
    });

    it("Affichage du nombre de séries favorites", () => {
        cy.favori();
        cy.get(".profil p").should('have.text', '1 ');
    });
});