import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    getDoc,
  } from "firebase/firestore";
  import { auth, db } from "@/firebaseSetup";
  import { Deck } from "@/shared/types";

  const q = query(
    collection(db, "deck"),
    where("userId", "==", auth.currentUser?.uid || "unknown")
  );