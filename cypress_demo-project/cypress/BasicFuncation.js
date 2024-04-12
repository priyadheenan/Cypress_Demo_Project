export default class {
  static url() {
    cy.visit("http://demoqa.com");
  }
  static UrlVerify(url) {
    cy.url().should("include", url);
  }
}
