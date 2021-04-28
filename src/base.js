import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKL6rzE-DBlE5Z-ZAfzyopCHCkyvWTK1U",
  authDomain: "chatbox-app-ca6db.firebaseapp.com",
  databaseURL: "https://chatbox-app-ca6db-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
