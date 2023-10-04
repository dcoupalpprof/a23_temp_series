///<reference types="cypress" />

describe("Fonctionnalités", () => {
    beforeEach(() => {
        // cy.intercept(Cypress.env('apiUrl'),
        //     { fixture: 'series.json' });
        cy.login();
    });

    it("Désélectionner des favoris", () => {
        cy.get(".lien_details").first().click();
        cy.get("[data-cy='button_favori']").click();
        cy.get("[data-cy='lien_Favoris']").click();
        cy.get(".lien_details").first().click();
        cy.get("[data-cy='button_favori']").click();
        cy.get("div.erreur").should("have.text", "Vous n'avez pas encore de séries favorites. Faites une recherche ou visitez les séries populaires pour en découvrir!");
    });

    it("Pas de recherche effectuée", () => {
        cy.get("[data-cy='lien_Recherche']").click();
        cy.get("div.erreur").should("have.text", "Veuillez entrer du contenu dans la barre de recherche pour continuer.");
    });

    it('Résultats multiples à une recherche', () => {
        cy.get("[data-cy='input_recherche']").type("g");
        cy.get(".lien_details").should('have.length.above', 0);
    });
});