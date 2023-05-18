import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: 'io.ionic.starter',
  // appName: 'myGallery',

  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '1036514703472-77fd85qdl3c58g34cgue0f74kpbv1ghu.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },

  appId: 'com.thebestapps.gallery',
  appName: 'ProGallery',
  webDir: 'www',
  bundledWebRuntime: false,
};

export default config;
