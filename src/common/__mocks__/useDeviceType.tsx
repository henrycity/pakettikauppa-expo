// https://jestjs.io/docs/en/manual-mocks#mocking-user-modules

import { useDeviceReturnType } from '../useDeviceType'

export default function useDeviceType(): useDeviceReturnType {
  const env = process.env.TEST_ENV
  if (env === 'mobile') return { isDesktop: false, isMobile: true }
  else return { isDesktop: true, isMobile: false }
}
