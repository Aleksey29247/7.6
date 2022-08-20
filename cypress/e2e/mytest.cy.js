import '../support/commands.js';

/*it("Add Book", () => {
    cy.visit("/booksNode");
    cy.login('test@test.com', 'test');
    cy.contains("Books list").click();
    cy.Book("Мертвые души", "Description", "Гоголь Н.В.");
    cy.contains("Submit").click();

});*/

it("Add Favorite Book", () => {
    cy.visit("/booksNode");
    cy.login('test@test.com', 'test');
    cy.contains('Books list').click();
    cy.Book("Шинель", "Description", "Гоголь Н.В.");
    cy.get("#favorite").click();
    cy.contains("Submit").click();

});


/*
it("Delete favorite Book", () => {
    cy.visit("/booksNode");
    cy.login('test@test.com', 'test');
    cy.contains("Books list").click();
    cy.get('[href="book/21d8772d-bdfe-4591-8b52-12af9773ad11"] > .h-100 > .card-footer > .btn').click();

});*/