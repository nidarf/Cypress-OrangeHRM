describe("Testing tab PIM - Membuat Employee", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.url().should("contain", "/pim/viewEmployeeList");
  });

  it("Gagal tambah employee baru - data kosong", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(".oxd-button--secondary").click();
    cy.contains("Required");
  });

  it("Berhasil tambah employee baru", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("Harry");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Potter");
    cy.get(".oxd-button--secondary").click();
  });

  it.only("Cek dan filter data employee baru", () => {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type("Harry");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3) > div").should(
      "contain",
      "Harry"
    );
  });
});
