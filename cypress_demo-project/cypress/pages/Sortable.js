const gridItem = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
export default class {
  static ClickTab(clickTab) {
    cy.get(`.list-container  a[data-rb-event-key="${clickTab}"]`).click();
  }
  static GridItemsVerify(gridType) {
    cy.get(`.tab-content #demo-tabpane-${gridType} li`)
      .should("be.visible")
      .should("have.length", 9)
      .each((select, index) => {
        cy.wrap(select)
          .should("contain.text", gridItem[index])
          .click()
          .should("have.css", "background-color", "rgb(0, 123, 255)");
      });
  }
  static ListItemsVerify(listType) {
    cy.get(`.tab-content #demo-tabpane-${listType} li`)
      .should("be.visible")
      .should("have.length", 4)
      .click({ multiple: true })
      .should("have.css", "background-color", "rgb(0, 123, 255)");
  }
}
