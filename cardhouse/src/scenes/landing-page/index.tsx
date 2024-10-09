import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import PlantPot from "@/assets/plant-pot.png";
import React from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const LandingPage = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <section id="Home" className="h-[100vh] flex flex-col justify-center">
      {/* CONTENT CONTAINER */}
      <div className="rounded-3xl h-auto flex flex-col items-center ">
        {/* TEXT AND BUTTON */}
        <div className="flex flex-col p-16 justify-center items-center text-center md:w-1/2 ">
          <h1 className="font-poppins text-4xl font-bold py-3 md:text-6xl">Say Goodbye to Boring Flashcards.</h1>
          <p className="text-lg mt-6 md:mt-2">Spaced-Repetition-System flashcards you actually want to look at ツ</p>
        </div>
        {/* PICTURE BUTTON*/}
          <img src={PlantPot} className="object-contain w-[150px] transition duration-150 hover:scale-110 md:w-[250px]" />
          <p className="my-1 font-bold font-dynapuff text-md text-accent">Click to start studying!</p>
      </div>
    </section>
  );
};

export default LandingPage;
