export default class BasePage {
  static setIphoneViewport() {
    cy.viewport("iphone-x");
  }
  static setTabletViewPort() {
    cy.viewport("ipad-2");
  }
  static setDesktopViewport() {
    cy.viewport("macbook-15");
  }
  static setLargDesktopViewPort() {
    cy.viewport(1980, 1080);
  }
}
