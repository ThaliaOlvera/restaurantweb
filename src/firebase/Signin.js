/* import React, {Component} from "react";
/*import withFirebaseAuth from 'react-with-firebase-auth';  */
import * as firebase from 'firebase/app';
/* import 'firebase/auth'; */
import firebaseConfig from './firebase';

/* const firebaseApp = firebase.initializeApp(firebaseConfig);
  */
/* class Login extends Component {
   render() {
      const { user, singOut, signInWithGoogle } = this.props;
      return (
         <div>
            {
               user ? 
               <p> Hola, {user.displayName}</p>
               :
               <p>Porfavor Inicia Sesion</p>
            }
            {
               user ? 
               <button onClick={singOut}>Sign Out</button>
               :
               <button onClick={signInWithGoogle}>Sign In with Google</button>
            }
         </div>
      );
   }

}
/*  */
/* const firebaseAppAuth = firebaseApp.auth ();
const providers = {
   googleProvider : new firebase.auth.GoogleAuthProvider(),
};
 */ 
/* export default withFirebaseAuth ({
   providers,
   firebaseAppAuth,
}) (Login); */