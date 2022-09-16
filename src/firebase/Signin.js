import React, {Component} from "react";
import firebase from 'firebase/app';
import { getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth";




export const loginGoogle = () => {
   console.log("entro");
   const auth = getAuth();
   const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
     .then((result) => {
       console.log(result);
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       // The signed-in user info.
       const user = result.user;
      
     })
     .catch((error) => {
       console.log(error);
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
      
     });
 };