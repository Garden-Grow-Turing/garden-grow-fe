describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/zipcode")
  })

  it('Should show the title with the appropiate search zipcode', () => {
    cy.get('.plants-title').contains('Fruits and Vegetables')
  })

  it('Should show each plant', () => {
    cy.get('.plant-card').should('be.visible')
  })

  it('Should have each card display image, title, and button', () => {
    cy.get('.card-image').first().should('be.visible')
    cy.get('.card-title').first().contains('Carrots')
    cy.get('.update-my-garden-button').first().contains('+ to my garden')
  })

  // Add tests for:

  // Correct zipcode displays when showing results for users zip
  // Displaying a different zipcode when input field is manipulated
  // Nav bar
  // Home button
  // Click a card to go to details page
  // Sad paths...
})