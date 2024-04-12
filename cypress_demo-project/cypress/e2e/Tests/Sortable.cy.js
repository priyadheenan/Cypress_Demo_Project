/// <reference types="cypress"/>

import ClickOnTab from "..//..//pages/Sortable";
import Navigate from "..//..//components/Navigate";

describe("Verify grids", () => {
  it("Url open", () => {
    cy.visit("https://demoqa.com");
  });
  it("Should Navigate to Interactions and Selectable", () => {
    Navigate.NavigateInteractions();
    Navigate.NavigateSelectable();
  });
  it("Should Click on Grid Tap and verify Items", () => {
    ClickOnTab.ClickTab("grid");
    ClickOnTab.GridItemsVerify("grid");
  });
  it("Should Click on List Tap Verify List Items", () => {
    ClickOnTab.ClickTab("list");
    ClickOnTab.ListItemsVerify("list");
  });
});
