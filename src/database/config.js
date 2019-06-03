import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD80mG07u1DkoyXGqQLV7zfTogGWSrXO5g",
    authDomain: "photowall-2e37b.firebaseapp.com",
    databaseURL: "https://photowall-2e37b.firebaseio.com",
    projectId: "photowall-2e37b",
    storageBucket: "photowall-2e37b.appspot.com",
    messagingSenderId: "7567982260",
    appId: "1:7567982260:web:a4f4b3d66309ad39"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {database}