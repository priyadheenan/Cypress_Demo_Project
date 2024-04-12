export default class {
  // Navigate Elements
  static NavigateElements() {
    cy.NavigationLink("1").click();
  }
  //Navigate Web Table
  static NavigateWebTable() {
    cy.NavigationSubLink().contains("Web Tables").click();
  }
  //Navigate text box
  static NavigateTextBox() {
    cy.NavigationSubLink().contains("Text Box").click();
  }
  static NavigateCheckBox() {
    cy.NavigationSubLink().contains("Check Box").click();
  }
  // Navigate Forms
  static NavigateForms() {
    cy.NavigationLink("2").click();
  }
  // Navigate Practice Form
  static NavigatePracticeForm() {
    cy.NavigationSubLink().contains("Practice Form").click();
  }

  // Navigate Broken Link-Image
  static NavigateBrokenLinkImage() {
    cy.NavigationSubLink().contains("Broken Links - Images").click();
  }

  // Navigate Widgets
  static NavigateWidgets() {
    cy.NavigationLink("4").click();
  }
  // Navigate Progress bar
  static NavigateProgressBar() {
    cy.NavigationSubLink().contains("Progress Bar").click();
  }

  // Navigate Tooltips
  static NavigateToolTips() {
    cy.NavigationSubLink().contains("Tool Tips").click();
  }

  // Navigate Interactions and Droppable
  static NavigateInteractions() {
    cy.NavigationLink("5").click();
  }

  // Navigate Sortable
  static NavigateSelectable() {
    cy.NavigationSubLink().contains("Selectable").click();
  }

  // Navigate Droppable
  static NavigateDroppable() {
    cy.NavigationSubLink().contains("Droppable").click();
  }
  //Navigate Web Table
  static NavigateWebTable() {
    cy.NavigationSubLink().contains("Web Tables").click();
  }
}
