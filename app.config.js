import 'dotenv/config'

export default{
  "expo": {
    "name": "Taller2-RN",
    "slug": "Taller2-RN",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apikey: process.env.API_KEY,
      authDomain: process.env.AUTH-DOMAIN,
      projectId: process.env.PROJECT_ID,
      StorageBucket: process.env.STORAGE_BUCKET,
      appId: process.env.APP_ID,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
    }
  }
}
