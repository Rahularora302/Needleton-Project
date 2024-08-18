import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0wbFmZ62EeaSiDteNielogXx0M_B8uUQ",
  authDomain: "needle-ton.firebaseapp.com",
  projectId: "needle-ton",
  storageBucket: "needle-ton.appspot.com",
  messagingSenderId: "123063459306",
  appId: "1:123063459306:web:4e117d7c7bfcc46c25e693"
};

 const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();