import 'dotenv/config';

export default{
  "expo": {
    "name": "msgs",
    "slug": "msgs",
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
      apiKey: "AIzaSyDO6QX-ZmPD0ls7YVTX9qmAPOZ25ubzSRk",
      authDomain: "msgs-chat.firebaseapp.com",
      projectId: "msgs-chat",
      storageBucket: "msgs-chat.appspot.com",
      messagingSenderId: "432056008042",
      appId: "1:432056008042:web:fc5cd9d6a8479ba5c1b913"
    }
  }
}
