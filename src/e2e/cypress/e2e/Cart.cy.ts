describe('Cart test', () => {
  it('Displays empty cart', () => {
    cy.visit('/cart');
    cy.contains(/your cart is empty!/i);
  });

  it('Can add item to cart', () => {
    cy.visit('/');
    cy.get('button').first().click();
    cy.contains('cart (1)').click();
    cy.contains(/remove/i);
  });

  it('Can add quantity of item', () => {
    cy.contains('+').click();
    cy.get('[aria-label="quantity"]').contains('2');
  });

  it('Can subtract quantity of item', () => {
    cy.contains('-').click();
    cy.get('[aria-label="quantity"]').contains('1');
  });

  it('Can remove item from cart', () => {
    cy.contains(/remove/i).click();
    cy.contains(/your cart is empty!/i);
  });
});
