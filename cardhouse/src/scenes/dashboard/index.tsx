import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";
<<<<<<< HEAD
import { SelectedPage } from "@/shared/types";
import DeckTile from "./DeckTile";
import PlantGif from "@/assets/four_plants.gif";
=======
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseSetup";
>>>>>>> firestore

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Dashboard = ({ selectedPage, setSelectedPage }: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const colors = ["bg-flower-pink", "bg-primary", "bg-accent"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const handleClick = async(e: React.MouseEvent) => {
    e.preventDefault();  

    try {
      const docRef = await addDoc(collection(db, "deck"), {
          name: "chinese 1",
          updatedAt: new Date(),
          userId: auth.currentUser?.uid || "unknown"
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (error) {
      console.error("Error adding document: ", error);
  }
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
<<<<<<< HEAD
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
          <p className="text-lg">Happy to see you here! Let's have a productive study session ^^</p>
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
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />

        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
        <DeckTile name="Chinese A1" deckId="123" color={getRandomColor()} />
      </div>
    </section>
=======
    <div className="flex justify-content items-center h-[500px] w-[500px] bg-blue-300">
      <p>Hi {displayName ? displayName : "Guest"}!</p>
      <button className="h-[50px] w-[60px] bg-red-700" onClick={handleClick}>Test db</button>
    </div>
>>>>>>> firestore
  );
};

export default Dashboard;
