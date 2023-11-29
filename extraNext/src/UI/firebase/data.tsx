import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDoexc_5ot5fIdoeXX30kHjeCGbMhaJ7Tg",
    authDomain: "extra-d6506.firebaseapp.com",
    databaseURL:
      "https://extra-d6506-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "extra-d6506",
    storageBucket: "extra-d6506.appspot.com",
    messagingSenderId: "917399665962",
    appId: "1:917399665962:web:3ad3369ec9516fcc797253",
  };

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)