import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCqV3J7_RhL5QMcE_nsBeTJ52DaKSv_Rj0",
    authDomain: "storyhub-924af.firebaseapp.com",
    projectId: "storyhub-924af",
    storageBucket: "storyhub-924af.appspot.com",
    messagingSenderId: "327433327131",
    appId: "1:327433327131:web:877216c36038052d6cdebe"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
