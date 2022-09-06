import firebase from '../firebase/firebase'



  const SignInWithFirebase = () => {
     var google_provider = firebase.auth.GoogleAuthProvider();
     firebase.auth().singInWithPopup(google_provider)
     .then ((resp)=> {
        console.log(resp);
     })
     .catch ((err)=> {
        console.log(err);
     })
  } 


export default SignInWithFirebase;