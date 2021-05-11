import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHhrJyknBds6HAKgN99b9SMZTHHfNSzJY",
    authDomain: "dounia-jowelry-997c7.firebaseapp.com",
    projectId: "dounia-jowelry-997c7",
    storageBucket: "dounia-jowelry-997c7.appspot.com",
    messagingSenderId: "634886803215",
    appId: "1:634886803215:web:469f6d96a3560c8390f87a",
    measurementId: "G-7RTE61F4Z1"
  });

  const auth = firebase.auth()

  export {auth}