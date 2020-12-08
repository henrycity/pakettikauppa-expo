import { ScreenName } from '../../types'

/**
 * Default mock for useAuthorization. Activated by calling `jest.mock('hooks/useAuthorization')` in the test file.
 *
 * `jest.mock('hooks/useAuthorization')` could be added to jest/setup.js if we wanted to use it in every test.
 */
export default () => (_screenName: ScreenName) => true
