describe('The login page', () => {
  before(() => {
    cy.visit('/')
    cy.waitForReact()
  })

  it('should have a login button', () => {
    cy.react('TouchableOpacity', {
      props: { accessibilityLabel: 'Login button' },
    }).should('have.length', '1')
  })

  it('should have a register button', () => {
    cy.react('TouchableOpacity', { props: { testID: 'register' } }).should(
      'have.length',
      '1'
    )
  })
})

/* Popup check seems to not work in the CI process
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
    cy.react('TouchableOpacity', { props: { testID: 'register' } }).click()
    cy.react('TouchableOpacity', { props: { testID: 'submit' } }).should(
      'have.length',
      1
    )
    cy.react('TouchableOpacity', { props: { testID: 'close' } }).should(
      'have.length',
      1
    )
  })
})

/* Cookie set by backend via this style of login doesn't seem to exist, but it is used properly.
describe('Programmatic login', () => {
  it('should set cookie', () => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/login`, {
      idToken: 'testToken',
    })
    cy.getCookie('jwt').should('exist')
  })
})
*/
