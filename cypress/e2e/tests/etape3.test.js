///<reference types="cypress" />

describe("Navigation", () => {
    it("Login", () => {
        cy.visit("/");
        cy.get("h1").should("have.text", "Authentification");
    });

    it("Trending", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get(".login button").click();
        cy.url().should("include", "/trending/");
    });

    it("Favorites", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get(".login button").click();
        cy.get("[data-cy='lien_Favoris']").click();
        cy.url().should("include", "/favorites/");
    });

    it("Trending - DetailsSerie", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get(".login button").click();
        cy.get("[data-cy='lien_details]").click();
        cy.get("h1").should("have.text", "Ahsoka");
    });

    // it("Favorites - DetailsSerie", () => {
    //     cy.visit("/");
    //     cy.get("[data-cy='input_nom']").type("Viviane");
    //     cy.get("[data-cy='input_mdp']").type("Dubuc");
    //     cy.get(".login button").click();
    // cy.get("[data-cy='lien_Favoris']").click();
    //     cy.get(".listeSeries a").click();
    //     cy.get("h1").should("have.text", "Ahsoka");
    // });
});

describe("Authentification", () => {
    it("Inputs vides", () => {
        cy.visit("/");
        cy.get(".login button").click();
        cy.url().should("include", "/login/");
    });

    it("Input MDP vide seulement", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get(".login button").click();
        cy.url().should("include", "/login/");
    });
    
    it("Input nom vide seulement", () => {
        cy.visit("/");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get(".login button").click();
        cy.url().should("include", "/login/");
    });
    
    it("Déconnexion", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get(".login button").click();
        cy.get(".profil button").click();
        cy.url().should("include", "/login/");
    });

    // it("Affichage nom", () => {
    //     cy.visit("/");
    //     cy.get("[data-cy='input_nom']").type("Viviane");
    //     cy.get("[data-cy='input_mdp']").type("Dubuc");
    //     cy.get(".login button").click();
    //     cy.get(".profil h1").should("have.text", "Viviane");
    // });
});

describe("Fonctionnalités", () => {
    // it("Favoris", () => {
    //     cy.visit("/");
    //     cy.get("[data-cy='input_nom']").type("Viviane");
    //     cy.get("[data-cy='input_mdp']").type("Dubuc");
    //     cy.get(".login button").click();
    //     cy.get("[data-cy='lien_details]").click();
    //     cy.get(".favori button").click();
    //     cy.get("[data-cy='lien_Favoris']").click();
    //     cy.get(".listesSerie .on h2").should("have.text", "Ahsoka");
    // });
});
