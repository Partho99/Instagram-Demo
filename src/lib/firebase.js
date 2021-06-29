import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfUbkeiy6k4bE8DDip9gePIG4_Jlm2xuA",
    authDomain: "instagram-clone-9afa2.firebaseapp.com",
    projectId: "instagram-clone-9afa2",
    storageBucket: "instagram-clone-9afa2.appspot.com",
    messagingSenderId: "904627539517",
    appId: "1:904627539517:web:cc5b8563dc2a5dd52ee454"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

// console.log('firebase', firebase)
// seedDatabase(firebase);

export {firebase, FieldValue};
