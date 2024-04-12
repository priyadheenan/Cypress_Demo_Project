export default class {
  static ClickOnAddButton() {
    cy.get("#addNewRecordButton").click();
  }
  static EnterNewData() {
    cy.fixture("EnterNewDataInTable").then((data) => {
      cy.get(".modal-content #userForm #firstName").type(data.firstName);
      cy.get(".modal-content #userForm #lastName").type(data.lastName);
      cy.get(".modal-content #userForm #userEmail").type(data.email);
      cy.get(".modal-content #userForm #age").type(data.age);
      cy.get(".modal-content #userForm #salary").type(data.salary);
      cy.get(".modal-content #userForm #department").type(data.department);
      cy.get(".modal-content #userForm #submit").click();
    });
  }
  static VerifyNewRow() {
    const newData = ["Alden", "Cantrell", 30, "test@test.com", 12345, "QA"];
    cy.get(
      ".ReactTable .rt-tbody .rt-tr-group:nth-child(4) .rt-td:not(:last-child)"
    ).each((element, index) => {
      cy.wrap(element).should("contain.text", newData[index]);
    });
  }
}
