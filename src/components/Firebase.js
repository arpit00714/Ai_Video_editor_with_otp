// Import the functions you need from the SDKs you need
import {initializeApp}  from "firebase/app";
import {getAuth} from 'firebase/auth';
// import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyBAKbeczeBPKeygkKp_kWloqEV6fF8bfKI",
  authDomain: "ai-video-recoder.firebaseapp.com",
  projectId: "ai-video-recoder",
  storageBucket: "ai-video-recoder.appspot.com",
  messagingSenderId: "161977608332",
  appId: "1:161977608332:web:280b851dda48b06a94f3a9",
  measurementId: "G-ZRKPEVR475"
};

const app =initializeApp(firebaseConfig);
// Authenticatio and get a refers to the service
const auth = getAuth(app);
export {auth};
