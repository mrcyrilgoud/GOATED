import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCc_eop-KQmd1QHvBjjnONdjA8LjHxDSs",
  authDomain: "goated-50aec.firebaseapp.com",
  projectId: "goated-50aec",
  storageBucket: "goated-50aec.appspot.com",
  messagingSenderId: "145592818913",
  appId: "1:145592818913:web:3a7b915f30b59a528f2ba0",
  measurementId: "G-45FS9JYCTB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
