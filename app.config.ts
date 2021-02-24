import 'dotenv/config'

export default {
  expo: {
    name: 'pakettikauppa-expo',
    slug: 'pakettikauppa-expo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    entryPoint: './src/App.tsx',
    scheme: 'pakettikauppa',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.pakettikauppa.expo',
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './src/assets/images/favicon.png',
    },
  },
}
