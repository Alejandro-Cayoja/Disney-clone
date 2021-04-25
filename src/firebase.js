import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAH9FmLY1XEheG0Oxn9jgV3Pbvg-7totyA",
    authDomain: "disneyplus-clone-ad7db.firebaseapp.com",
    projectId: "disneyplus-clone-ad7db",
    storageBucket: "disneyplus-clone-ad7db.appspot.com",
    messagingSenderId: "691202593901",
    appId: "1:691202593901:web:7ed6968230b47b9c081b64",
    measurementId: "G-LEXKKMD5FE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;