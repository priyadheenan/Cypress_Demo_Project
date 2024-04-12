export default class {
  static VerifyPageTitle() {
    cy.get(".main-header").should("contain", "Check Box");
  }
  static VerifyCheckboxTree() {
    cy.get(".check-box-tree-wrapper .rct-icon-expand-close").should(
      "have.css",
      "opacity",
      "0.5"
    );
    cy.get(".check-box-tree-wrapper .rct-checkbox").should("not.be.checked");
    cy.get(".check-box-tree-wrapper .rct-node-icon").should(
      "have.css",
      "color",
      "rgb(51, 51, 204)"
    );
    cy.get(".check-box-tree-wrapper .rct-title").should("contain", "Home");

    cy.get(".check-box-tree-wrapper .rct-icon-expand-close").click();

    cy.get(".check-box-tree-wrapper .rct-node-collapsed")
      .should("be.visible")
      .each((elemment) => {
        cy.wrap(elemment).find(".rct-checkbox").should("not.be.checked");
        cy.wrap(elemment)
          .find(".rct-node-icon")
          .should("have.css", "color", "rgb(51, 51, 204)");
      });
  }
}
