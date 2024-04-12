/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import CheckBox from "..//../pages/CheckBox";

describe("Verify Check Box", () => {
  before("Open Url", () => {
    OpenUrl.url();
  });
  it("Navigate links", () => {
    Navigate.NavigateElements();
    Navigate.NavigateCheckBox();
  });
  it("Should Verify Toggle Cloase, Check Box Uncheck and Toggle Text", () => {
    CheckBox.VerifyCheckboxTree();
  });
});
