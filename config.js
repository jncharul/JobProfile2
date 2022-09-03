import firebase from 'firebase';
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyDAbpsj88DP7XLtL-3stbDwmfQkzZugUto",
    authDomain: "jobportal-c468f.firebaseapp.com",
    projectId: "jobportal-c468f",
    storageBucket: "jobportal-c468f.appspot.com",
    messagingSenderId: "237518440939",
    appId: "1:237518440939:web:bedbcd3cc99af72745f1ae"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();