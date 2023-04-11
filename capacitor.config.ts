import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    androidScheme: 'http',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  },
  appId: 'io.ionic.starter',
  appName: 'varzea-sc',
  webDir: 'dist',
  bundledWebRuntime: false
};

export default config;
