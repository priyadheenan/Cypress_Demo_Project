describe("Creation of user account", () => {
  it("POST Request to Create User Account", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/swagger/#/Account/AccountV1UserPost/",

      body: {
        userName: "string",
        password: "string",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.headers.Status);
    });
  });
  it("API testing and check status", () => {
    cy.request("https://demoqa.com/swagger/#/Account/AccountV1UserPost/").as(
      "staAPI"
    );
    cy.get("@staAPI").its("status").should("equal", 200);
  });
});
