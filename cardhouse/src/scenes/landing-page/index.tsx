import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import PlantPot from "@/assets/plant-pot.png";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

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
            <div className="absolute bg-neutral-300 w-[550px] h-[500px] rounded-full left-64 -top-[230px] opacity-30" />
            <div className="absolute bg-primary w-[600px] h-[600px] rounded-full -bottom-[300px] -left-[100px] opacity-80" />
            <div className="absolute bg-secondary w-[300px] h-[300px] rounded-full bottom-10 right-32 opacity-50" />
          </>
        ) : (
          <div></div>
        )}
        {/* TEXT AND BUTTON */}
        <div className="z-20 flex flex-col md:p-16 justify-center items-center text-center sm:w-2/3 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="font-poppins text-4xl font-bold py-3 sm:text-5xl md:text-6xl leading-tight md:leading-tight">
              Say Goodbye to Boring{" "}
              <span className="text-flower-pink">Flashcards</span>.
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-xl mt-6 md:mt-2">
              A Spaced-Repetition-System app you actually want to look at ツ
            </p>
          </motion.div>
        </div>
        {isAboveSmallScreens ? (
          <>
            {/* PICTURE BUTTON */}
            <div className="relative group w-[200px] transition-transform duration-150 hover:scale-110">
              <img
                src={PlantPot}
                className="object-contain w-full transition-opacity duration-150 group-hover:opacity-80 animate-pulse"
              />
              <p className="absolute inset-0 flex items-center justify-center">
                <span className="w-96 bg-accent text-white text-center font-dynapuff mt-10 px-2 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 inline-block white-space-nowrap">
                  Click to start
                </span>
              </p>
            </div>
          </>
        ) : (
          <div>
            {/* PICTURE BUTTON MOBILE */}
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
        )}
      </div>
    </section>
  );
};

export default LandingPage;
