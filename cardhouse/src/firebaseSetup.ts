import { initializeApp } from "firebase/app";
import { User, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      alert(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return null;
  }
};

export const logoutFirebase = () => {
  signOut(auth);
};
