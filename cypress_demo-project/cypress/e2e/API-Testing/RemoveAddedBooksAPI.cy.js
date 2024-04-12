describe("Remove Books", () => {
  it("DELETE Request to Remove Added Books", () => {
    cy.request({
      method: "DELETE",
      url: "https://demoqa.com/swagger/#/BookStore/BookStoreV1BookDelete",
      body: {
        isbn: "string",
        userId: "string",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
