import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTC3YseVPqGEtOxTR2Uyk2oSW1CQOUHJc",
  authDomain: "instagram-clone-react-998f2.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-998f2-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-998f2",
  storageBucket: "instagram-clone-react-998f2.appspot.com",
  messagingSenderId: "565850186716",
  appId: "1:565850186716:web:34a871acc4639665ad2519",
  measurementId: "G-PQ4N3DXF2P"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }
