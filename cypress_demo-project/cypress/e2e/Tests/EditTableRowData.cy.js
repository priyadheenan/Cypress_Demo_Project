/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import EditAndReplaceNames from "../../pages/EditTableRowData";

describe("Verify Table Row", () => {
  before(() => {
    OpenUrl.url();
  });
  it("Should Click on Elements Navigation And then click on Web Table", () => {
    Navigate.NavigateElements();
    Navigate.NavigateWebTable();
    OpenUrl.UrlVerify("webtables");
  });
  it("Should Click on Edit Icon in The Second Row of The Table", () => {
    EditAndReplaceNames.ClickEditIcon();
  });
  it("Should Edit the First Name and Last Name", () => {
    EditAndReplaceNames.EditFirstAndLastName();
  });
  it("Should Click on Submit Button", () => {
    EditAndReplaceNames.HitSaveData();
  });
  it("Verify User Successfully Edit Data", () => {
    EditAndReplaceNames.VerifySussccfullyEdit();
  });
});
