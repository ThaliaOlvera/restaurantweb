
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnY0oxNWtlFQ3QxgnBG224Y4kqXRTmXXk",
    authDomain: "restaurantweb-c944f.firebaseapp.com",
    projectId: "restaurantweb-c944f",
    storageBucket: "restaurantweb-c944f.appspot.com",
    messagingSenderId: "983343581680",
    appId: "1:983343581680:web:2b972f7ea44cd7876eb535"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)