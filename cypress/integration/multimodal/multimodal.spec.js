import {Given , When, Then} from "cypress-cucumber-preprocessor/steps"
import multimodalAccess from "../Locator/multimodalAccess";

const multimodalAccessLocator = new multimodalAccess();

Given("User navigate to {string}", { browser: 'firefox' }, (url) => {
  cy.wait(500)
  cy.visit(url, { failOnStatusCode: false }).wait(500);
});

When("User navigate to {string} in /multimodal page", (link) => {
  cy.wait(500)
  cy.get(multimodalAccessLocator.getLocator(link))
    .click({ multiple : true })
    .wait(500);
});

Then("Status code should not be {int}", (statusCode) => {
  cy.wait(1000);
  cy.url().then((httpUrl) => {
    cy.request({ url: httpUrl, failOnStatusCode: false }).should((response) => {
      expect(response.status).to.not.equal(statusCode);
    });
  });
});

Then("Status code should be {int}", (statusCode) => {
  cy.wait(1000);
  cy.url().then((httpUrl) => {
    cy.request({ url: httpUrl, failOnStatusCode: false }).should((response) => {
      expect(response.status).to.equal(statusCode);
    });
  });
});
