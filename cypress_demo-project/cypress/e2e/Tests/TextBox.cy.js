/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import TextBox from "..//../pages/TextBox";
describe("Verify Text Box", () => {
  before(() => {
    OpenUrl.url();
  });
  context("Text Box", () => {
    it("Should Click on Element Navigation", () => {
      Navigate.NavigateElements();
      Navigate.NavigateTextBox();
      OpenUrl.UrlVerify("text-box");
    });
    it("Should Verfiy Page Title", () => {
      TextBox.VerifyPageTitle();
    });
    it("Should Fill Out Text Boxs Details", () => {
      TextBox.TextBoxFillDetails();
    });
    it("Should Click on Submit", () => {
      TextBox.SubmitTextBox();
    });
    it("Verify Submitted User Details", () => {
      TextBox.VerifySubmittedDetails();
    });
  });
  context("Tab Keyboard", () => {
    it("Type Tab Keyboard to Change Field", () => {
      cy.reload();
      TextBox.TypeKeyboardTab();
    });
  });
});
describe("Text Box Negative Test", () => {
  context("Input Incorrect Email and Other Field Leave Empty", () => {
    it("Should Email Not Correct", () => {
      cy.reload();
      TextBox.EmptyEmailField();
    });

    it("Should Click on Submit", () => {
      TextBox.SubmitTextBox();
    });
    it("Verify Email Field Error Class Name and Color", () => {
      TextBox.VerifyErrorClassEmailField();
    });
  });
});
