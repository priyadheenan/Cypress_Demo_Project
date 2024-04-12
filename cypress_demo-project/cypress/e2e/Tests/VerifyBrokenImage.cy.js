/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import BrokenImage from "../../pages/VerifyBrokenImage";
describe("Verify Broken Image", () => {
  before(() => {
    OpenUrl.url();
  });
  it("Should Click on Elements Navigation then Should Click on Broken Link-Image Navigation ", () => {
    Navigate.NavigateElements();
    Navigate.NavigateBrokenLinkImage();
    OpenUrl.UrlVerify("broken");
  });
  it("Should verify Image is Broken ", () => {
    BrokenImage.BrokenImageVerify();
  });
});
