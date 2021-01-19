describe('Navigation drawer', () => {
  beforeEach(() => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    cy.visit('/')
    cy.waitForReact()
  })

  it('should have log out button', () => {
    cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Log out' } }).click()
    cy.getCookie('jwt').should('have.property', 'value', '')
  })
})

describe('Log out button', () => {
  beforeEach(() => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    cy.visit('/')
    cy.waitForReact()
  })

  it('should clear login cookie', () => {
    cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Log out' } }).click()
    cy.getCookie('jwt').should('have.property', 'value', '')
  })

  it('should redirect to login page', () => {
    cy.react('MenuButton').click()
    cy.react('DrawerItem', { props: { label: 'Log out' } }).click()
    cy.url().should('include', 'login')
  })
})
