import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAf9gADp4um2fTBcdfoVWKEOyKxk_v_uTk",
  authDomain: "disneyplus-clone-ce0a1.firebaseapp.com",
  projectId: "disneyplus-clone-ce0a1",
  storageBucket: "disneyplus-clone-ce0a1.appspot.com",
  messagingSenderId: "570250172482",
  appId: "1:570250172482:web:64bcb5b0b4f735f5c5f5db",
  measurementId: "G-XTMD640E4P",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, signInWithPopup, signOut, storage };
export default db;
