describe('The login page', () => {
  before(() => {
    cy.visit('/')
    cy.waitForReact()
  })

  it('should have a login button', () => {
    cy.react('Button', { props: { title: 'Login' } })
  })

  it('should have a register button', () => {
    cy.react('Button', { props: { title: 'Register' } })
  })
})

// Popup check seems to not work in the CI process //
/*
describe('The login button', () => {
  before(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('popup')
      },
    })
    cy.waitForReact()
  })

  it('should open Google auth in a new window', () => {
    cy.react('Button', { props: { title: 'Login' } }).click()
    cy.get('@popup').should('be.called')
  })
})
*/

describe('The register button', () => {
  before(() => {
    cy.visit('/')
    cy.waitForReact()
  })

  it('should open registration modal', () => {
    cy.react('Button', { props: { title: 'Register' } }).click()
    cy.react('Button', { props: { title: 'Submit' } })
    cy.react('Button', { props: { title: 'Close' } })
  })
})

describe('Programmatic login', () => {
  it('should set cookie', () => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    cy.getCookie('jwt').should('exist')
  })
})
