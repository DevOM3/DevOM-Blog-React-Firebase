import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoFdHBZkD6T-t6EFzxWydez__sxODlCDs",
    authDomain: "devomweb.firebaseapp.com",
    databaseURL: "https://devomweb.firebaseio.com",
    projectId: "devomweb",
    storageBucket: "devomweb.appspot.com",
    messagingSenderId: "293788310122",
    appId: "1:293788310122:web:1b43e2f84230c80e348813",
    measurementId: "G-ETVLQHGRDM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
export default db;
