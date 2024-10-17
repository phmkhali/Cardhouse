import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/firebaseSetup";
import { Deck } from "@/shared/types";

// Function to add a deck
export const addDeck = async () => {
  try {
    const docRef = await addDoc(collection(db, "deck"), {
      name: "japanese 1",
      updatedAt: new Date(),
      userId: auth.currentUser?.uid || "unknown",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const subscribeToDecks = (setDeckList: React.Dispatch<React.SetStateAction<Deck[]>>) => {
  const q = query(
    collection(db, "deck"),
    where("userId", "==", auth.currentUser?.uid || "unknown")
  );

  return onSnapshot(q, (querySnapshot) => {
    const decks: Deck[] = [];
    querySnapshot.forEach((doc) => {
      decks.push({ id: doc.id, name: doc.data().name });
    });
    setDeckList(decks);
  });
};
