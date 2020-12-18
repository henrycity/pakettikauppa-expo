export function handleIOSAndroidToken(idToken: string): Promise<void> {
  try {
    return new Promise((resolve) => resolve())
  } catch (e) {
    throw new Error(e)
  }
}

export default function useLogin() {
  return {
    login: jest.fn,
    disabled: false,
  }
}
