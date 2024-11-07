/// <reference types="cypress" />

import { mount } from "cypress/react";

Cypress.Commands.add("mount", (component, options) => {
  // Wrap with any parent components needed
  return mount(component, options);
});
