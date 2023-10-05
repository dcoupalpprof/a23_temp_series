///<reference types="cypress" />

describe("Authentification", () => {
    before(() => {
        cy.intercept(Cypress.env('apiUrl'),
            { fixture: 'series.json' });
    });

    it("Route Login par défaut lorsque non connecté", () => {
        cy.visit("/");
        cy.url().should("include", "login");
    });

    it("Champ Nom fonctionnel", () => {
        cy.login();
        cy.get(".profil h1").should("have.text", "Viviane");
    });

    it("Validation d'un formulaire d'authentification vide", () => {
        cy.visit("/");
        cy.get("[data-cy='button_connexion']").click();
        cy.url().should("include", "login");
    });

    it("Validation d'un formulaire d'authentification où le MDP est vide", () => {
        cy.visit("/");
        cy.get("[data-cy='input_nom']").type("Viviane");
        cy.get("[data-cy='button_connexion']").click();
        cy.get("div.erreur").should("have.text", "Veuillez entrer un mot de passe pour continuer.");
    });

    it("Validation d'un formulaire d'authentification où le Nom est vide", () => {
        cy.visit("/");
        cy.get("[data-cy='input_mdp']").type("Dubuc");
        cy.get("[data-cy='button_connexion']").click();
        cy.get("div.erreur").should("have.text", "Veuillez entrer un nom d'utilisateur pour continuer.");
    });

    it("Déconnexion complète de l'utilisateur", () => {
        cy.login();
        cy.get("[data-cy='button_deconnexion']").click();
        cy.url().should("include", "login");
    });
});