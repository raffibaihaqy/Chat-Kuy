import firebase from 'firebase'

var FirebaseKeys = {
    apiKey: "AIzaSyDMiuuz3rDgSg6jehbwHpQ7s_h5TNzAPQM",
    authDomain: "chatkuy-f081d.firebaseapp.com",
    databaseURL: "https://chatkuy-f081d.firebaseio.com",
    projectId: "chatkuy-f081d",
    storageBucket: "chatkuy-f081d.appspot.com",
    messagingSenderId: "1090017335579",
    appId: "1:1090017335579:web:f4d768c97c93c0f4d01bbe",
    measurementId: "G-58312FGCFY"
  };
  //initialize firebase
  firebase.initializeApp(FirebaseKeys)
  firebase.analytics()

export default FirebaseKeys;