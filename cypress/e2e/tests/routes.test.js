///<reference types="cypress" />

describe("Routes", () => {
    beforeEach(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
    });

    it("Login", () => {
        cy.visit("/");
        cy.get("h1").should("have.text", "Authentification");
    });

    it("Trending", () => {
        cy.login();
        cy.url().should("include", "trending");
    });

    it("Favorites", () => {
        cy.login();
        cy.get("[data-cy='lien_Favoris']").click();
        cy.url().should("include", "favorites");
    });

    it("Recherche", () => {
        cy.login();
        cy.get("[data-cy='lien_Recherche']").click();
        cy.url().should("include", "recherche");
    });

    it("Trending - DetailsSerie", () => {
        cy.login();
        cy.get(".lien_details").first().click();
        cy.get("main h1").should("have.text", "Gen V");
    });

    it("Favorites - DetailsSerie", () => {
        cy.login();
        cy.get(".lien_details").first().click();
        cy.get("[data-cy='button_favori']").click();
        cy.get("[data-cy='lien_Favoris']").click();
        cy.get(".lien_details").first().click();
        cy.get("main h1").should("have.text", "Gen V");
    });
    
    it("Recherche - DetailsSerie", () => {
        cy.login();
        cy.get("[data-cy='lien_Recherche']").click();
        cy.get("[data-cy='input_recherche']").first().type("Gen V");
        cy.get(".lien_details").first().click();
        cy.get("main h1").should("have.text", "Gen V");
    });
});