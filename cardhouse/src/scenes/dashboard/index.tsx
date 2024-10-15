import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";
import { SelectedPage } from "@/shared/types";
import DeckTile from "./DeckTile";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Dashboard = ({ selectedPage, setSelectedPage }: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName || "User";
        console.log("uid", uid);
        console.log("displayName", displayName);
        setDisplayName(displayName);
      } else {
        console.log("User is logged out");
        setDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="dashboard" className="h-[100vh] w-[100wv] flex flex-col items-center justify-center mx-6">
        {/* HEADER TEXT */}
      <div className=" w-[90%] h-auto flex flex-col overflow-hidden gap-2">
        <h1 className="text-4xl font-bold text-secondary">
          Hi {displayName ? displayName : "Guest"}!
        </h1>
        <p>Happy to see you here! Let's have a productive study session ^^</p>
      </div>
      {/* DECKS GALLERY */}
      <h2 className="w-[90%] font-bold text-2xl mt-10">Study Decks</h2>
      <div className="w-[90%] h-auto flex flex-row flex-wrap overflow-hidden-500 pt-2">
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>

        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>
        <DeckTile name={"Chinese A1"} deckId={"123"} ></DeckTile>

      </div>
    </section>
  );
};

export default Dashboard;
