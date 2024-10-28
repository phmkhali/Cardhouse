import { addDoc, collection, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseSetup";
import { Deck, Card } from "@/shared/types";

// Fetch a deck by ID
export const getDeckById = async (id: string): Promise<Deck | null> => {
  try {
    const deckRef = doc(db, "deck", id);
    const deckSnapshot = await getDoc(deckRef);
    if (deckSnapshot.exists()) {
      return deckSnapshot.data() as Deck;
    } else {
      console.log("No such deck found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching deck:", error);
    return null;
  }
};

// Add a new card to a deck
export const addCardToDeck = async (deckId: string, front: string, back: string): Promise<void> => {
  try {
    const cardsCollectionRef = collection(db, "deck", deckId, "cards");
    await addDoc(cardsCollectionRef, { front, back });
    console.log("Card added successfully");
  } catch (error) {
    console.error("Error adding card:", error);
  }
};

// Edit an existing card
export const editCardInDeck = async (deckId: string, cardId: string, front: string, back: string): Promise<void> => {
  try {
    const cardRef = doc(db, "deck", deckId, "cards", cardId);
    await updateDoc(cardRef, { front, back });
    console.log("Card updated successfully");
  } catch (error) {
    console.error("Error updating card:", error);
  }
};

// Delete a card from a deck
export const deleteCardFromDeck = async (deckId: string, cardId: string): Promise<void> => {
  try {
    const cardRef = doc(db, "deck", deckId, "cards", cardId);
    await deleteDoc(cardRef);
    console.log("Card deleted successfully");
  } catch (error) {
    console.error("Error deleting card:", error);
  }
};
