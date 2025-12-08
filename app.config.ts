import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'volunteam',
  slug: 'volunteam',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#031A62',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.don.volunteam', // <-- REQUIRED for Android builds
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission: 'The app accesses your photos to let you add them to events.',
        cameraPermission: 'The app accesses your camera to let you add pictures to events.',
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '17927353-1970-45a9-8947-e8aaee2a5d70',
    },
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  },
});
