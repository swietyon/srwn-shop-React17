// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCUfHqrwsZXfR6jWPqDo6jIowzh9_G5hpY",
  authDomain: "crwn-db-8f3ed.firebaseapp.com",
  projectId: "crwn-db-8f3ed",
  storageBucket: "crwn-db-8f3ed.appspot.com",
  messagingSenderId: "258884399405",
  appId: "1:258884399405:web:b71a5bb29d9678de61a3a4",
  measurementId: "G-ESC9HDVKV6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);