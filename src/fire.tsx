import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDm94YMFdL84NMa1s_30GTsoCSIgLv_2z8",
    authDomain: "simpleretro-f3fcc.firebaseapp.com",
    databaseURL: "https://simpleretro-f3fcc.firebaseio.com",
    projectId: "simpleretro-f3fcc",
    storageBucket: "simpleretro-f3fcc.appspot.com",
    messagingSenderId: "331832488511",
    appId: "1:331832488511:web:6c06d9fa74ea1cae42fe8a",
    measurementId: "G-ZDCCY3817X"
  };
export const fireb = firebase.initializeApp(firebaseConfig)