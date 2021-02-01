describe('Navigation', () => {
  beforeEach(() => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    cy.visit('/')
    cy.waitForReact()
  })

  it('should redirect to profile page', () => {
    cy.url().should('include', '/profile')
  })

  it('should have a drawer menu', () => {
    // cy.react('MenuButton').click()
    cy.react('DrawerMenu').should('be.visible')
  })

  it('should have drawer link to shipments', () => {
    // cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Shipments' } }).click()
    cy.url().should('include', '/shipments')
  })

  it('should have drawer link to reports', () => {
    // cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Reports' } }).click()
    cy.url().should('include', '/reports')
  })

  it('should have drawer link to statistics', () => {
    // cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Statistics' } }).click()
    cy.url().should('include', '/statistics')
  })

  it('should have drawer link to settings', () => {
    // cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Settings' } }).click()
    cy.url().should('include', '/settings')
  })
})
