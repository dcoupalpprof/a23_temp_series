///<reference types="cypress" />

describe("Détails", () => {
    beforeEach(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
        cy.login();
    });

    it('Route enfant de la page Trending', () => {
        cy.get(".lien_details").first().click();
        cy.url().should("include", "trending");
    });

    it('Route enfant de la page Favorites', () => {
        cy.favori();
        cy.get(".lien_details").first().click();
        cy.url().should("include", "favorites");
    });

    it('Route enfant de la page Recherche', () => {
        cy.get("[data-cy='lien_Recherche']").click();
        cy.get("[data-cy='input_recherche']").first().type("Sex Education");
        cy.get(".recherche [data-cy=button_recherche]").first().click();
        cy.get(".lien_details").first().click();
        cy.url().should("include", "recherche");
    });

    it("Affichage complet des détails", () => {
        cy.get(".lien_details").first().click();
        cy.get(".entete h1").should("have.text", "Sex Education");
        cy.get(".informations .info h2").should("have.text", "Synopsis");
        cy.get(".informations .fondPale h3").first().should("have.text", "Genres");
        cy.get(".informations .rating h3").first().should("have.text", "Classement global");
        cy.get(".saisons h2").should("have.text", "Saisons");
    });

    it("Affichage de la bande-annonce", () => {
        cy.get(".lien_details").first().click();
        cy.get(".bandeAnnonce iframe");
    });

    it("Affichage du rating", () => {
        cy.get(".lien_details").first().click();
        cy.get(".rating:first-child p:last-child").should("have.text", "4.1/5");
    });

    it("Évaluation de l'utilisateur", () => {
        cy.get(".lien_details").first().click();
        cy.get(".rating:last-child button").first().click();
        cy.get(".rating:last-child p:last-child").should("have.text", "1.0/5");
    });

    it("Changement d'un favori", () => {
        cy.favori();
        cy.get(".lien_details").first().click();
        cy.get("[data-cy='button_favori']").click();
        cy.get("div.erreur").should("have.text", "Vous n'avez pas encore de séries favorites. Faites une recherche ou visitez les séries populaires pour en découvrir!");
    });

    it("Affichage du nombre d'épisodes par saison", () => {
        cy.get(".lien_details").first().click();
        cy.get(".saison p").first().should("have.text", "8 épisodes");
    });

    it("Alternance de la visibilité de la section épisodes", () => {
        cy.get(".lien_details").first().click();
        cy.get(".saisons > button").first().click();
        cy.get(".saisons > button").first().click();
        cy.get(".saisons > div").first().should("have.class", "hidden");
    });
});