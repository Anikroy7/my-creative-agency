import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
//     appId: process.env.REACT_APP_APP_ID,
// };
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDl1-ulm2-X7sTqmtb2qpvVF9hGNYzlFg",
    authDomain: "creative-agency-46b6b.firebaseapp.com",
    projectId: "creative-agency-46b6b",
    storageBucket: "creative-agency-46b6b.appspot.com",
    messagingSenderId: "857243290181",
    appId: "1:857243290181:web:4460f5f91e2a89708af12c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
