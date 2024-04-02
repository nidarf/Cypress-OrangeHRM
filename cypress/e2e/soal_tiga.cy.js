describe("Testing tab Recruitment - Add Recruitment", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(5) > .oxd-main-menu-item").click();
    cy.url().should("contain", "/recruitment/viewCandidates");
  });

  it("Gagal tambah vacancy baru - data kosong", () => {
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(".oxd-button--secondary").click();
    cy.contains("Required");
  });

  it.only("Berhasil tambah vacancy baru", () => {
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ".oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("QA Manual");
    cy.get(".oxd-select-text").click();
    cy.get("[role=listbox]");
    //cy.get(".oxd-button--secondary").click();
  });
});
