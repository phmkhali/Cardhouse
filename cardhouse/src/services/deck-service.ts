import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseSetup";
import { Deck } from "@/shared/types";

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
