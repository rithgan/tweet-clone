import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBalkJTUs-BDhAwAFyU_i4JSYCej18F_bY",
  authDomain: "tweet-clone-63ae5.firebaseapp.com",
  projectId: "tweet-clone-63ae5",
  storageBucket: "tweet-clone-63ae5.appspot.com",
  messagingSenderId: "851211909517",
  appId: "1:851211909517:web:834b11a06fb394dd0ea5c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
