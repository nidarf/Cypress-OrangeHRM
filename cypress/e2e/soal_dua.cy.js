describe("Testing tab Emergency Contact - Add Emergency Contact", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(":nth-child(3) > .orangehrm-tabs-item").click();
    cy.url().should("contain", "/pim/viewEmergencyContacts");
  });

  it("Gagal tambah emergency contact - data kosong", () => {
    cy.get(
      ":nth-child(1) > .orangehrm-action-header > .oxd-button > .oxd-icon"
    ).click();
    cy.get(".oxd-button--secondary").click();
    cy.contains("Required");
    cy.contains("At least one phone number is required");
  });

  it("Gagal tambah emergency contact - invalid data", () => {
    cy.get(
      ":nth-child(1) > .orangehrm-action-header > .oxd-button > .oxd-icon"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Hermione");
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Cousin");

    cy.fixture("user.json")
      .its("emergency_invalid")
      .then((data) => {
        data.forEach((userdata) => {
          cy.get(
            ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
          ).type(userdata.home_tlp);
          cy.get(".oxd-button--secondary").click();
          cy.contains("Allows numbers and only + - / ( )");
          cy.get(
            ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
          ).clear();
        });
      });
  });

  it("Berhasil tambah emergency contact - data valid", () => {
    cy.get(
      ":nth-child(1) > .orangehrm-action-header > .oxd-button > .oxd-icon"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Hermione");
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Cousin");
    cy.get(
      ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("+628263527192");
    cy.get(".oxd-button--secondary").click();
  });
});

describe("Testing tab Emergency Contact - Add Emergency Contact", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(":nth-child(3) > .orangehrm-tabs-item").click();
    cy.url().should("contain", "/pim/viewEmergencyContacts");
  });

  it("Gagal tambah attachments - data kosong", () => {
    cy.get(":nth-child(2) > .orangehrm-action-header > .oxd-button").click();
    cy.get(".oxd-button--secondary").click();
    cy.contains("Required");
  });

  it.only("Berhasil tambah attachment - tanpa comment", () => {
    cy.get(":nth-child(2) > .orangehrm-action-header > .oxd-button").click();
  });
});
