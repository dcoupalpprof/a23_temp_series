///<reference types="cypress" />

describe("Favoris", () => {
    // before(() => {
    //     cy.intercept(Cypress.env('apiUrl'),
    //         { fixture: 'series.json' });
    // });

    beforeEach(() => {
        cy.login();
    });

    it('Affichage complet des séries favorites', () => {
        cy.favori();
        cy.get(".lien_details").should('have.length.above', 0);
    });
    
    it("Affichage fonctionnel si le nombre de séries favorites est de 0", () => {
        cy.get("[data-cy='lien_Favoris']").click();
        cy.get("div.erreur").should("have.text", "Vous n'avez pas encore de séries favorites. Faites une recherche ou visitez les séries populaires pour en découvrir!");
    });

    it('Suppression des favrois à la déconnexion', () => {
        cy.favori();
        cy.get("[data-cy='button_deconnexion']").click();
        cy.login();
        cy.get(".profil p").first().should('include', '0');
    });
});