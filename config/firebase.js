import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import Constants from 'expo-constants'
// Firebase config

const firebaseConfig = {
    apiKey: "AIzaSyDO6QX-ZmPD0ls7YVTX9qmAPOZ25ubzSRk",
    authDomain: "msgs-chat.firebaseapp.com",
    projectId: "msgs-chat",
    storageBucket: "msgs-chat.appspot.com",
    messagingSenderId: "432056008042",
    appId: "1:432056008042:web:fc5cd9d6a8479ba5c1b913"
  };

  // initialize
  initializeApp(firebaseConfig)
  export const auth = getAuth();
  export const database = getFirestore();
