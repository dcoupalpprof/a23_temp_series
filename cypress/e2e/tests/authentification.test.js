///<reference types="cypress" />

describe("Authentification", () => {
    it("Inputs vides", () => {
        cy.visit("/");
        cy.get("[data-cy='button_connexion']").click();
        cy.url().should("include", "login");
    });

    it("Input MDP vide seulement", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='button_connexion']").click();
        cy.get("div.erreur").should("have.text", "Veuillez entrer un mot de passe pour continuer.");
    });
    
    it("Input nom vide seulement", () => {
        cy.visit("/");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get("[data-cy='button_connexion']").click();
        cy.get("div.erreur").should("have.text", "Veuillez entrer un nom d'utilisateur pour continuer.");
    });

    it("Déconnexion", () => {
        cy.login();
        cy.get("[data-cy='button_deconnexion']").click();
        cy.url().should("include", "login");
    });

    it("Affichage nom", () => {
        cy.login();
        cy.get(".profil h1").should("have.text", "Viviane");
    });
});