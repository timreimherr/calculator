import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0a7mt7lKsU98eC3WrQzaYldRk1Xun0Tc",
    authDomain: "calculator-279e0.firebaseapp.com",
    databaseURL: "https://calculator-279e0.firebaseio.com",
    projectId: "calculator-279e0",
    storageBucket: "calculator-279e0.appspot.com",
    messagingSenderId: "229428550851",
    appId: "1:229428550851:web:9e6f4d996d635acbecd676",
    measurementId: "G-8TM23X06B7"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
