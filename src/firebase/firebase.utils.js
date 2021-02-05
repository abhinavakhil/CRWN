import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDUqBpyCNOjpKsKb40-o4bI7TK6aPSQyVI",
    authDomain: "react-crwn-d3d3e.firebaseapp.com",
    projectId: "react-crwn-d3d3e",
    storageBucket: "react-crwn-d3d3e.appspot.com",
    messagingSenderId: "890090434551",
    appId: "1:890090434551:web:666d42911126ccd75888f2",
    measurementId: "G-527Z025DWP"
}


// for storing loggedInuser user Data in firebase firestore start
export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth){
      return;
  }
  //storing loggedInuser Data to firebase
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exits){
      const { displayName , email } = userAuth;
      const createdAt = new Date();

      try{
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
      })
      } catch(error){
         console.log('error catching user',error.message);
      }
  }
  return userRef;
}
// for storing user Data in firebase firestore end


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google auth(signIn)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;