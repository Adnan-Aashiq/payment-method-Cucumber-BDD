/// <reference types="Cypress" />

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
Given("I navigate to website", () => {
    cy.visit("https://shell.dev.superfleet-enabler.com/");
    cy.wait(7000)
})
When("I enter login credentials", () => {
    cy.get('.shadow-root').shadow().find('.sc-ehvNnt.kXFJeq button').click()
    cy.xpath("//input[@id='frmEmailC-7']").type('payment-methods-uk-test@grp.bp.com')
    cy.xpath("//input[@id='input-5']").type('ubx9ZRU6gvy2vka@ytq')
    cy.xpath("//button[normalize-space()='Log in']").click()
})
Then("I should be logged in", () => {
    
})