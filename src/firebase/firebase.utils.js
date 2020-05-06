import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwkMbIoUkEPiG9Pfn5fKP6JAAV-1PM5Yg",
    authDomain: "crwn-db-bd50f.firebaseapp.com",
    databaseURL: "https://crwn-db-bd50f.firebaseio.com",
    projectId: "crwn-db-bd50f",
    storageBucket: "crwn-db-bd50f.appspot.com",
    messagingSenderId: "379907173731",
    appId: "1:379907173731:web:b91988b3f785eba9d77756"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;