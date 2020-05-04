
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';


  const config = {
    apiKey: "AIzaSyAPHGeBRRRklbrAYHkfHSJV6i-IXJJiscA",
    authDomain: "market-db-41f10.firebaseapp.com",
    databaseURL: "https://market-db-41f10.firebaseio.com",
    projectId: "market-db-41f10",
    storageBucket: "market-db-41f10.appspot.com",
    messagingSenderId: "287932058003",
    appId: "1:287932058003:web:d51fb01ed7cbe74796c066",
    measurementId: "G-MGWM961W3J"
  };

  firebase.initializeApp(config);
  
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const db = firebase.database();

                const userRef = firestore.doc('data/0');
                const snapShot = userRef.get();
                var data = snapShot.docs;
  
  //const dtdaTada = firestore.collections; 

  export const setDataBase = () => {
      //console.log('userId', userId);
      console.log('snapShot', snapShot);
      console.log('db', db);
     console.log(' data',  data);

     firestore.collection("data").get().then(
         (querySnapshot) => {
        querySnapshot.forEach((doc, i) => {
            console.log(`${doc.id} => ${doc.data().name}`);
        }
       )})   
}
 
