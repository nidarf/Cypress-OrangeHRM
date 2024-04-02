describe("Test Login", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });

  //data ketika kosong
  it("Gagal login - Submit Data Kosong", () => {
    cy.get("button").click();
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-text").should("be.visible");
    cy.get(":nth-child(3) > .oxd-input-group > .oxd-text").should("be.visible");
  });

  //data invalid
  it("Gagal login - Submit Data Invalid", () => {
    cy.fixture("user.json")
      .its("invalid")
      .then((data) => {
        data.forEach((userdata) => {
          cy.get("input[name=username]").type(userdata.username);
          cy.get("input[name=password][type=password]").type(userdata.password);
          cy.get("button").click();
          cy.get(".oxd-alert").should("exist");
          cy.get(
            '[class="oxd-text oxd-text--p oxd-alert-content-text"]'
          ).should("have.text", "Invalid credentials");
          cy.reload();
        });
      });
  });

  //data valid
  it("Berhasil login - Data Valid", () => {
    cy.fixture("user.json")
      .its("valid")
      .then((data) => {
        cy.get("input[name=username]").type(data.username);
        cy.get("input[name=password][type=password]").type(data.password);
        cy.get("button").click();
        cy.url().should(
          "eq",
          "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
        );
        cy.contains("Dashboard");
        cy.get(".oxd-userdropdown-tab").should("exist");
      });
  });
});

describe("Testing tab MyInfo - Personal Detail", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.url().should("contain", "/pim/viewPersonalDetails");
  });

  it("Save data kosong", () => {
    cy.get("input[name=firstName]").clear();
    cy.get("input[name=middleName]").clear();
    cy.get("input[name=lastName]").clear();
    cy.get(
      ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).clear();
    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).clear();
    cy.get(
      ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).clear();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).clear();
    cy.get(".--clear").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).clear();
    cy.get(".--clear").click();
    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click();
    cy.get(".--name-grouped-field > :nth-child(1) > .oxd-text").should("exist");
    cy.get(".--name-grouped-field > :nth-child(3) > .oxd-text").should("exist");
  });
});

describe("Testing tab MyInfo - Contact Detail", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
    cy.visit("/dashboard/index");
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(":nth-child(2) > .orangehrm-tabs-item").click();
    cy.url().should("contain", "/pim/contactDetails");
  });

  it("Save data kosong", () => {
    cy.get("input").clear();
    cy.get(".oxd-form-actions > .oxd-button").click();
  });
});
