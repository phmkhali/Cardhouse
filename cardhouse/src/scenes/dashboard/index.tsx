import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";
import { Deck, SelectedPage } from "@/shared/types";
import DeckList from "./DeckList";
import GreetingSection from "./GreetingSection";
import { addDeck, subscribeToDecks } from "@/scenes/dashboard/dashboardDb";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Dashboard: React.FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [deckList, setDeckList] = useState<Deck[]>([]);
  const colors = ["bg-flower-pink", "bg-primary", "bg-accent"];

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName || "User";
        setDisplayName(displayName);
      } else {
        setDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeDecks = subscribeToDecks(setDeckList);
    return () => unsubscribeDecks(); // Cleanup listener
  }, []);

  return (
    <section
      id="dashboard"
      className="h-auto w-[100wv] md:h-[100vh] flex flex-col items-center mt-[130px] md:mx-6"
    >
      <GreetingSection displayName={displayName} onAddDeckClick={addDeck} />

      {/* DECKS GALLERY */}
      <h2 className="w-[90%] font-bold text-2xl mt-4 md:mt-10">Study Decks</h2>
      <DeckList deckList={deckList} getRandomColor={getRandomColor} />
    </section>
  );
};

export default Dashboard;
