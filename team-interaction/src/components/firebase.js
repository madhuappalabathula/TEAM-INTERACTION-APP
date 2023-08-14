import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiLoWcHJax7BGwMhNFZz8lzfu0pJ_QAA4",
  authDomain: "team-tnteraction-app.firebaseapp.com",
  projectId: "team-tnteraction-app",
  databaseURL:"https://team-tnteraction-app.firebaseio.com",
  storageBucket: "team-tnteraction-app.appspot.com",
  messagingSenderId: "421403050452",
  appId: "1:421403050452:web:dbb49142df449668e79641",
  measurementId: "G-NNP70SN9C9"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;
  