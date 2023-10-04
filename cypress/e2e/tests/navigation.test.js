///<reference types="cypress" />

describe("Navigation", () => {
    // before(() => {
    //     cy.intercept(Cypress.env('apiUrl'),
    //         { fixture: 'series.json' });
    // });

    it("Lien vers la page Login", () => {
        cy.visit("/");
        cy.url().should("include", "login");
    });

    it("Lien vers la page Trending", () => {
        cy.login();
        cy.url().should("include", "trending");
    });

    it("Lien vers la page Favorites", () => {
        cy.login();
        cy.get("[data-cy='lien_Favoris']").click();
        cy.url().should("include", "favorites");
    });

    it("Lien vers la page Recherche", () => {
        cy.login();
        cy.get("[data-cy='lien_Recherche']").click();
        cy.url().should("include", "recherche");
    });

    it("Lien vers la page Trending - DetailsSerie", () => {
        cy.login();
        cy.get(".lien_details").first().click();
        cy.get(".entete h1").should("have.text", "Sex Education");
    });

    it("Lien vers la page Favorites - DetailsSerie", () => {
        cy.login();
        cy.favori();
        cy.get(".lien_details").first().click();
        cy.get(".entete h1").should("have.text", "Sex Education");
    });

    it("Lien vers la page Recherche - DetailsSerie", () => {
        cy.login();
        cy.get("[data-cy='lien_Recherche']").click();
        cy.get("[data-cy='input_recherche']").first().type("Sex Education");
        cy.get(".recherche [data-cy=button_recherche]").first().click();
        cy.get(".lien_details").first().click();
        cy.get(".entete h1").should("have.text", "Sex Education");
    });
});