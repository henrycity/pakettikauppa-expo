export function handleIOSAndroidToken(idToken: string): Promise<void> {
  try {
    return new Promise((resolve) => resolve())
  } catch (e) {
    throw new Error(e)
  }
}

export default function useLogin(): { login: jest.Mock; disabled: boolean } {
  return {
    login: jest.fn(),
    disabled: false,
  }
}
