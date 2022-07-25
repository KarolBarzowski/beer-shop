describe('Details test', () => {
  it('Renders the details page', () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    cy.visit(`/beer/${rand}`);
    cy.get('img').should('exist');
    cy.get('[aria-label="name"]').should('exist');
    cy.get('[aria-label="tagline"]').should('exist');
    cy.get('[aria-label="alcohol"]').should('exist');
    cy.get('[aria-label="description"]').should('exist');
    cy.get('[aria-label="food pairing"]').should('exist');
    cy.contains(/add to cart/i).click();
    cy.contains('cart (1)').should('exist');
  });

  it('Displays error message', () => {
    cy.visit(`/beer/wrong_id`);
    cy.get('h3').contains('Sorry! Beer not found.').should('exist');
  });
});
