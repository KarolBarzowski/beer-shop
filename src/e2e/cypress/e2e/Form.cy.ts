describe('Form test', () => {
  beforeEach(() => {
    cy.visit('/');

    for (let i = 0; i < 10; i++) {
      const rand = Math.floor(Math.random() * 20);
      cy.get('button').eq(rand).click();
    }

    cy.contains('cart (10)').click();
  });

  it('Validates the form', () => {
    cy.contains(/buy/i).click();

    cy.contains(/name is required/i);
    cy.contains(/address is required/i);
    cy.contains(/postal code is required/i);
    cy.contains(/city is required/i);
    cy.contains(/email is required/i);

    cy.get('#postalCode').type('12345');
    cy.get('#email').type('loremipsum');
    cy.contains(/buy/i).click();

    cy.contains(/postal code is wrong/i);
    cy.contains(/email is wrong/i);

    cy.get('#name').type('Lorem ipsum');
    cy.get('#address').type('Lorem ipsum');
    cy.get('#postalCode').clear().type('12-345');
    cy.get('#city').type('Lorem ipsum');
    cy.get('#email').clear().type('lorem@ipsum.com');
    cy.contains(/buy/i).click();

    cy.contains(/success!/i);
  });
});
