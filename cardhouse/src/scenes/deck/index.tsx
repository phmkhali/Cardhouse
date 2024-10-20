import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeckById } from "@/services/deck-service";
import Farming from "@/assets/farming.svg";

const Deck: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [deckName, setDeckName] = useState<string>("");
  const inputStyling =
    "w-[250px] h-[80px] px-2 border border-gray-300 rounded text-center text-lg rounded-2xl";
  useEffect(() => {
    const fetchDeck = async () => {
      if (id) {
        const deck = await getDeckById(id);
        if (deck?.name) {
          setDeckName(deck.name);
        }
      }
    };
    fetchDeck();
  }, [id]);

  return (
    <section id="deck" className={"h-auto w-[100wv] md:h-[100vh] flex flex-col items-center mx-2 mt-[130px]"}>
        <h1 className="text-4xl font-poppins font-bold text-primary">
          {deckName}
        </h1>
        {/* ADD NEW CARDS */}
        <div className="flex flex-row w-[90%] h-auto justify-between">
          <div className="h-fit w-auto flex flex-row items-center mx-auto my-4 overflow-hidden gap-4 ">
            <input
              type="text"
              value=""
              placeholder="Enter front"
              className={inputStyling}
              onChange={(e) => console.log("added: ")}
            />
            <input
              type="text"
              value=""
              placeholder="Enter back"
              className={inputStyling}
              onChange={(e) => console.log("added: ")}
            />
          </div>
        </div>
        <button className="w-[200px] h-[50px] bg-flower-pink text-white font-bold rounded-full py-2 px-4">
          Add Flashcard
        </button>
        {/* CARD CONTENT AND IMAGE */}
        <div className="flex flex-row w-4/5 h-[100%]m-6 p-6 rounded-2xl justify-between">
          {/* CARDS */}
          <div className="font-bold basis-3/5">
            <h2 className="text-2xl text-text">Cards in this deck</h2>
          </div>
          {/* IMAGE */}
          <div className="">
            <img src={Farming} className="w-auto object-contain h-full" />
          </div>
        </div>
    </section>
  );
};

export default Deck;
