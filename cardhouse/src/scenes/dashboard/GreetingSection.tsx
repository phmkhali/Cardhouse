import React, { useState } from "react";
import PlantGif from "@/assets/four_plants.gif";

type Props = {
  displayName: string | null;
  onAddDeckClick: (deckName: string) => Promise<void>;
};

const GreetingSection: React.FC<Props> = ({ displayName, onAddDeckClick }) => {
  const [deckName, setDeckName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckName(e.target.value);
  };

  const handleButtonClick = () => {
    onAddDeckClick(deckName); // Pass the entered deck name to the parent component
    setDeckName(""); // Clear the input field after adding
  };

  return (
    <div className="w-[90%] h-auto flex flex-col md:flex-row md:items-center justify-start">
      {/* GREETING TEXT */}
      <div className="basis-2/5 h-auto flex flex-col overflow-hidden gap-2">
        <h1 className="text-4xl font-bold text-secondary">
          Hi {displayName ? displayName : "Guest"}!
        </h1>
        <p className="text-lg">
          Happy to see you here! Let's have a productive study session ^^
        </p>

        {/* Input field for deck name */}
        <input
          type="text"
          value={deckName}
          onChange={handleInputChange}
          placeholder="Enter deck name"
          className="w-[200px] h-[40px] mb-2 px-2 border border-gray-300 rounded"
        />

        <button
          onClick={handleButtonClick}
          className="w-[200px] h-[50px] bg-primary text-white font-bold rounded-full py-2 px-4"
        >
          Add Deck
        </button>
      </div>

      {/* PLANT GIF */}
      <div>
        <img
          className="object-contain h-[130px]"
          src={PlantGif}
          alt="Animated Plants"
        />
      </div>
    </div>
  );
};

export default GreetingSection;
