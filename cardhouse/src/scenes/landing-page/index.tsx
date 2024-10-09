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
      <div className="m-6 p-6 rounded-3xl h-auto">
        {/* COLOR BLOCKS */}
        <div className="w-[250px] h-[250px] bg-primary rounded-3xl"></div>
        {/* TITLE AND BUTTON */}
        <div className="w-full flex flex-col p-16 justify-center items-center">
          <h1 className="font-lato text-8xl font-bold py-3">Cardhouse</h1>
          <p className="pb-6">SRS Flashcards made fun ツ</p>
          <ActionButton size="large" setSelectedPage={setSelectedPage}>
            Lets Study
          </ActionButton>
        </div>
        {/* PICTURE */}
        <div className="flex justify-center items-center">
          <img src={PlantPot} className="object-contain w-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
