import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDiO-WVdJ4PQAY6AvgH5vm8au6_sdEJtM4',
  authDomain: 'tiar-77e7b.firebaseapp.com',
  databaseURL: 'https://tiar-77e7b.firebaseio.com',
  projectId: 'tiar-77e7b',
  storageBucket: 'tiar-77e7b.appspot.com',
  messagingSenderId: '457461806539',
  appId: '1:457461806539:web:54ada813cf566da517724e'
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});


export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  });

  // [START auth_link_with_popup]
  
};





export const signInWithEmail = (email, password) => {

  return auth.signInWithEmailAndPassword(email, password);
}



export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  console.log('aData', additionalData)
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      await userRef.set({
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
