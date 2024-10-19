import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Card } from "ts-fsrs";

export interface CardType {
  title: string;
  description: string;
  // Add any other fields your card object has, like "createdAt", "author", etc.
}

const db = getFirestore();

export const getCardById = async (id: string): Promise<CardType | null> => {
  const cardRef = doc(db, "cards", id);
  const cardSnapshot = await getDoc(cardRef);

  if (cardSnapshot.exists()) {
    return cardSnapshot.data() as CardType; // Ensure the data is cast to the CardType
  } else {
    throw new Error("Card not found");
  }
};
