///<reference types="cypress" />

describe("Trending", () => {
    // before(() => {
    //     cy.intercept(Cypress.env('apiUrl'),
    //         { fixture: 'series.json' });
    // });

    beforeEach(() => {
        cy.login();
    });

    it('Affichage complet de toutes les séries', () => {
        cy.get(".lien_details").should('have.length.above', 0);
    });

    it('Mise en évidence de la série sélectionnée', () => {
        cy.get(".lien_details").first().click();
        cy.get(".listeSeries div").first().should('have.class', 'on');
    });
});