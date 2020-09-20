import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAovjhU2TpqE0sbiWsflFyVkbOoRdV_Lew",
  authDomain: "master-piece-firegram.firebaseapp.com",
  databaseURL: "https://master-piece-firegram.firebaseio.com",
  projectId: "master-piece-firegram",
  storageBucket: "master-piece-firegram.appspot.com",
  messagingSenderId: "1041065216014",
  appId: "1:1041065216014:web:0c9322bdd194c1c620d45f",
  measurementId: "G-B6FZ6PJTXH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamps = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamps };
