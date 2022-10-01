import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXGV_gDKLI1Fc3oZX8ebAlyBNVgAvf1qw",
    authDomain: "linkedin-clone-8006c.firebaseapp.com",
    projectId: "linkedin-clone-8006c",
    storageBucket: "linkedin-clone-8006c.appspot.com",
    messagingSenderId: "261326498670",
    appId: "1:261326498670:web:931e6a16919048311fef7f",
    measurementId: "G-BGTN8L9QPH"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };