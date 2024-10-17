import React from "react";
import PlantGif from "@/assets/four_plants.gif";

type GreetingSectionProps = {
  displayName: string | null;
  onAddDeckClick: () => void;
};

const GreetingSection: React.FC<GreetingSectionProps> = ({ displayName, onAddDeckClick }) => {
  return (
    <div className="w-[90%] h-auto flex flex-col md:flex-row md:items-center justify-start">
      {/* GREETING TEXT */}
      <div className="basis-2/5 h-auto flex flex-col overflow-hidden gap-2">
        <h1 className="text-4xl font-bold text-secondary">Hi {displayName ? displayName : "Guest"}!</h1>
        <p className="text-lg">
          Happy to see you here! Let's have a productive study session ^^
        </p>
        <button
          onClick={onAddDeckClick}
          className="w-[200px] h-[50px] bg-primary text-white font-bold rounded-full py-2 px-4"
        >
          Add data
        </button>
      </div>
      {/* PLANT DIV */}
      <div>
        <img className="object-contain h-[130px]" src={PlantGif} alt="Animated Plants" />
      </div>
    </div>
  );
};

export default GreetingSection;
