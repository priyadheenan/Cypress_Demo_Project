const UserData = [
  "Name Test",
  "test@gmail.com",
  "Blechhemmer 9b 1",
  "Live in munich for 9 month",
];
export default class {
  static VerifyPageTitle() {
    cy.get(".main-header").contains("Text Box");
  }
  static TextBoxFillDetails() {
    cy.TextBox("#userName")
      .should("have.attr", "placeholder", "Full Name")
      .focus()
      .should("have.css", "border-color", "rgb(128, 189, 255)")
      .type("Name Test");
    cy.TextBox("#userEmail")
      .should("have.attr", "placeholder", "name@example.com")
      .focus()
      .should("have.css", "border-color", "rgb(128, 189, 255)")
      .type("test@gmail.com");
    cy.TextBox("#currentAddress")
      .should("have.attr", "placeholder", "Current Address")
      .focus()
      .should("have.css", "border-color", "rgb(128, 189, 255)")
      .type("Blechhemmer 9b 1");
    cy.TextBox("#permanentAddress").type("Live in munich for 9 month");
  }
  static TypeKeyboardTab() {
    cy.TextBox("#userName")
      .type("Name Test")
      .tab()
      .type("test@gmail.com")
      .tab()
      .type("Blechhemmer 9b 1")
      .tab()
      .type("Live in munich for 9 month");
  }

  static VerifySubmittedDetails() {
    cy.TextBox("#output").each((DetialList, index) => {
      cy.wrap(DetialList.text()).should("contains", UserData[index]);
    });
  }
  static EmptyEmailField() {
    cy.TextBox('input[type="email"]').type("test");
  }
  static SubmitTextBox() {
    cy.TextBox("button").click();
  }

  static VerifyErrorClassEmailField() {
    cy.TextBox('input[type="email"]')
      .should("have.class", "field-error")
      .and("have.css", "border", "1px solid rgb(255, 0, 0)");
  }
}
