describe('Home test', () => {
  it('Infinite scroll works correctly', () => {
    cy.visit('/');
    cy.contains(/beer shop/i);
    cy.get('button').should('have.length', 20);
    cy.scrollTo('bottom');
    cy.get('button').should('have.length', 40);
  });
});
