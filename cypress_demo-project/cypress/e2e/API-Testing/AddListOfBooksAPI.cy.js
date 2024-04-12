describe("Add a list of books", () => {
  it("POST Request to Add Books List", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksPost",

      body: {
        userId: "string",
        collectionOfIsbns: [
          {
            isbn: "string",
          },
        ],
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
