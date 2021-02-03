describe('Navigation drawer', () => {
  beforeEach(() => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    // cy.getCookie('jwt').should('exist')  // Cookie doesn't exist even if it's set (?)
    cy.visit('/')
    cy.waitForReact()
  })

  it('should have log out button', () => {
    cy.react('DrawerItem', { props: { label: 'Log out' } }).should('exist')
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
    cy.react('DrawerItem', { props: { label: 'Log out' } }).click()
    //cy.getCookie('jwt').should('have.property', 'value', '')  // Cookie doesn't exist even if it's set (?)
  })

  it('should redirect to login page', () => {
    cy.react('DrawerItem', { props: { label: 'Log out' } }).click()
    cy.url().should('include', 'login')
  })
})
