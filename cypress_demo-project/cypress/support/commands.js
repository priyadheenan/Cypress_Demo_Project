import "cypress-file-upload";
import "@4tw/cypress-drag-drop";

const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}

Cypress.Commands.add("NavigationLink", (itemName) => {
  cy.get(`.category-cards > :nth-child(${itemName})`);
});
Cypress.Commands.add("NavigationSubLink", () => {
  cy.get(`.element-group .element-list .menu-list`);
});

Cypress.Commands.add("EditTableRow", (idName) => {
  cy.get(`.modal-content .modal-body #userForm #${idName}`);
});

Cypress.Commands.add("TextBox", (tagName) => {
  cy.get(`#userForm ${tagName}`);
});
