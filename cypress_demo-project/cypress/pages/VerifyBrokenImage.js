export default class {
  static BrokenImageVerify() {
    cy.get('img[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .should(($img) => expect($img[0].naturalWidth).be.lte(0))
      .should(($img) => expect($img[0].naturalHeight).be.lte(0));
  }
}
