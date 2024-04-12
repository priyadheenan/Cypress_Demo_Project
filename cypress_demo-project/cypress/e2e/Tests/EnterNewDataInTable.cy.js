/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import EnterNewData from "../../pages/EnterNewDataInTable";

describe("Enter New Data", () => {
  before(() => {
    OpenUrl.url();
  });

  it("Should Click on Elements Navigation and then click on Web Table", function () {
    Navigate.NavigateElements();
    Navigate.NavigateWebTable();
    OpenUrl.UrlVerify("webtables");
  });
  it("Should Click on Add Button", () => {
    EnterNewData.ClickOnAddButton();
  });
  it("Should Fill Out Form With User Data", () => {
    EnterNewData.EnterNewData();
  });
  it("Should Verify New Row Created & Appeared Provided Data", () => {
    EnterNewData.VerifyNewRow();
  });
});
