import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import PlantPot from "@/assets/plant-pot.png";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const LandingPage = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 480px)");

  return (
    <section
      id="home"
      className="h-[100vh] flex flex-col items-center justify-center relative"
    >
      {/* CONTENT CONTAINER */}
      <div className="rounded-3xl w-5/6 h-3/4 flex flex-col justify-between items-center mt-6 p-6 relative sm:border sm:shadow-md sm:bg-neutral-100 overflow-hidden">
        {/* DECORATIVE ELEMENTS */}
        {isAboveSmallScreens ? (
          <>
            <div className="absolute bg-neutral-300 w-[600px] h-[500px] rounded-full -top-[180px] opacity-30" />
          </>
        ) : (
          <div></div>
        )}
        {/* TEXT AND BUTTON */}
        <div className="z-20 flex flex-col md:p-16 justify-center items-center text-center sm:w-2/3 ">
          <h1 className="font-poppins text-4xl font-bold py-3 sm:text-5xl md:text-6xl leading-tight md:leading-tight">
            Say Goodbye to Boring{" "}
            <span className="text-flower-pink">Flashcards</span>.
          </h1>
          <p className="text-xl mt-6 md:mt-2">
            A Spaced-Repetition-System app you actually want to look at ツ
          </p>
        </div>
        {/* PICTURE BUTTON*/}
        <div className="z-20">
          <img
            src={PlantPot}
            className="object-contain w-[150px] transition duration-150 hover:scale-110 md:w-[200px]"
          />
          <p className="my-1 font-dynapuff text-md text-center text-accent">
            *Click to start*
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
