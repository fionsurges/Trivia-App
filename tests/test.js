describe("passes all tests", () => {
    it("meets expectations", () => {
        cy.visit("http://localhost:3000"),
            cy.get(".start-game").click(),
            cy.get(".dropbtn").trigger("mouseover"),
            cy.get(".dropdown-content a").eq(0).click({ force: true }),
            cy.get(".value").eq(0).click(),
            cy.get(".questions p").eq(0).click()

    })
})