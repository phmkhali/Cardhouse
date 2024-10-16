import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";
import { SelectedPage } from "@/shared/types";
import DeckTile from "./DeckTile";
import PlantGif from "@/assets/four_plants.gif";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebaseSetup";
import { Deck } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Dashboard = ({ selectedPage, setSelectedPage }: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const colors = ["bg-flower-pink", "bg-primary", "bg-accent"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const q = query(
    collection(db, "deck"),
    where("userId", "==", auth.currentUser?.uid || "unknown"),
  );

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

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

  const [deckList, setDeckList] = useState<Deck[]>([]); 

  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    const decks: Deck[] = [];

    querySnapshot.forEach((doc) => {
      decks.push({ id: doc.id, name: doc.data().name }); 
    });
    setDeckList(decks);
  };

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
    <section
      id="dashboard"
      className="h-auto w-[100wv] md:h-[100vh] flex flex-col items-center mt-[130px] md:mx-6"
    >
      {/* HEADER ROW */}
      <div className="w-[90%] h-auto flex flex-col md:flex-row md:items-center justify-start">
        {/* GREETING TEXT */}
        <div className="basis-2/5 h-auto flex flex-col overflow-hidden gap-2">
          <h1 className="text-4xl font-bold text-secondary">
            Hi {displayName ? displayName : "Guest"}!
          </h1>
          <p className="text-lg">
            Happy to see you here! Let's have a productive study session ^^
          </p>
          <button
            onClick={handleClick}
            className="w-[200px] h-[50px] bg-primary text-white font-bold rounded-full py-2 px-4"
          >
            Add data
          </button>
          <button
            onClick={fetchData}
            className="w-[200px] h-[50px] bg-primary text-white font-bold rounded-full py-2 px-4"
          >
            Fetch data
          </button>
        </div>
        {/* PLANT DIV */}
        <div>
          <img
            className="object-contain h-[130px]"
            src={PlantGif}
            alt="Animated Plants"
          />
        </div>
      </div>

      {/* DECKS GALLERY */}
      <h2 className="w-[90%] font-bold text-2xl mt-4 md:mt-10">Study Decks</h2>
      <div className="w-[90%] h-auto flex flex-row flex-wrap overflow-hidden-500 pt-2">
      {deckList.map((deck) => (
        <DeckTile 
          key={deck.id} 
          name={deck.name} 
          deckId={deck.id} 
          color={getRandomColor()} 
        />
      ))}
      </div>
    </section>
  );
};

export default Dashboard;
