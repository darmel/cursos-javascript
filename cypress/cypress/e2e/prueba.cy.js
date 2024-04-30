describe("01-test", () => {
    let a = 3;
    let b = 2;
    it("visitar pagina", () => {
        cy.visit("https://darmel.github.io/proyecto_js_04/index.html");
    });
    //test con assert
    it("prbar igualdad", function () {
        expect(2 * a == b).to.equal(false);
    });

    //test calcular precio
    it("Calcula el precio por Kg correctamente", () => {
        // entrar a la pagina
        cy.visit("http://127.0.0.1:5500/proyecto_js_04/index.html");

        // ingresa valores
        cy.get("#product1").type("carne");
        cy.get("#precio1").type("1500");
        cy.get("#cantidad1").type("2");

        // selecciona el radio
        cy.get("#kg1").check();

        // click en  "Calculate"
        cy.contains("Calculate").click();

        // assert del resultado
        cy.get("#precioPorKg1").should("have.text", "el precio es $750 por kg");
    });
});
