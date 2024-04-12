export default class {
  static HoverToolTips() {
    cy.get("#toolTipButton").trigger("mouseover");
    cy.get(".tooltip-inner").should("be.visible");
  }
}
