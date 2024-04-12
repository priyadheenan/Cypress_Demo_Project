export default class {
  static StudentRegistrationData() {
    cy.fixture("PracticeFormData").then((StudentData) => {
      cy.get(".practice-form-wrapper #userForm #firstName")
        .should("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "First Name")
        .type(StudentData.firstName);
      cy.get(".practice-form-wrapper #userForm #lastName")
        .should("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "Last Name")
        .type(StudentData.lastName);
      cy.get(".practice-form-wrapper #userForm #userEmail")
        .should("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "name@example.com")
        .type(StudentData.userEmail);

      const gernderList = ["Male", "Female", "Other"];
      cy.get("#userForm #genterWrapper .custom-control-inline")
        .should("have.length", 3)
        .and("not.be.checked")
        .each((element, index) => {
          cy.wrap(element).should("contain.text", gernderList[index]);
        });

      cy.get("#userForm .custom-radio input[value='Male']").click({
        force: true,
      });

      cy.get(".practice-form-wrapper #userForm #userNumber")
        .should("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "Mobile Number")
        .type(StudentData.userNumber);
      cy.get(".practice-form-wrapper #userForm #dateOfBirthInput").click();

      cy.get(
        ".react-datepicker__month-container .react-datepicker__month-select "
      ).select(StudentData.monthOfBirth);

      cy.get(
        ".react-datepicker__month-container .react-datepicker__year-select "
      ).select(StudentData.yearOfBirth);

      cy.get(".react-datepicker__month-container .react-datepicker__month")
        .contains(StudentData.dayOfBirth)
        .click();

      cy.get(".practice-form-wrapper #userForm #subjectsInput").type(
        StudentData.subjects
      );

      const hobbiesList = ["Sports", "Reading", "Music"];
      cy.get("#hobbiesWrapper .custom-control-inline")
        .should("have.length", 3)
        .and("not.be.checked")
        .each((element, index) => {
          cy.wrap(element).should("contain.text", hobbiesList[index]);
        });

      cy.get("#hobbiesWrapper .custom-checkbox #hobbies-checkbox-2").click({
        force: true,
      });
      const imagePath = "images/loading.png";
      cy.get(".practice-form-wrapper #userForm #uploadPicture").attachFile(
        imagePath
      );
      cy.get(".practice-form-wrapper #userForm #currentAddress")
        .should("be.visible")
        .and("be.enabled")
        .and("have.attr", "placeholder", "Current Address")
        .type(StudentData.currentAddress);

      cy.get("#userForm #stateCity-wrapper #state").click();
      cy.get("#react-select-3-option-0").click();

      cy.get("#userForm #stateCity-wrapper #city").click();
      cy.get("#react-select-4-option-0").click();
    });
  }
  static SubmitForm() {
    cy.get("#submit").click({ force: true });
  }
  static SubmittedSuccessfully() {
    cy.get(".modal-dialog .modal-header .modal-title").then(function (messege) {
      expect(messege.text()).to.contains("Thanks for submitting the form");
    });
  }
  static CloseDialog() {
    cy.get("#closeLargeModal").click();
  }
}
