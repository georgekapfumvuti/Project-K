import {Given , When, Then} from "cypress-cucumber-preprocessor/steps"
import badpage from "../Locator/badpage";

const badpageLocator = new badpage();

Given("User navigate to {string}", (url) => {
  cy.wait(500);
  cy.visit(url, { failOnStatusCode: false }).wait(500);
});

When("User navigate to {string} in /badpage page", (link) => {
  cy.wait(500);
  cy.get(badpageLocator.getLocator(link)).click({ force: true }).wait(500);
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


