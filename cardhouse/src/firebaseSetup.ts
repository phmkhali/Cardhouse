import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoIx71Ys_--IYatsN3Qp6jE76DTX3CXMI",
  authDomain: "cardhouse-7f740.firebaseapp.com",
  projectId: "cardhouse-7f740",
  storageBucket: "cardhouse-7f740.appspot.com",
  messagingSenderId: "813025787511",
  appId: "1:813025787511:web:f49837afd69787e775d072",
  measurementId: "G-PR4FS9ZX2L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
