import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeckById } from "@/services/deck-service";
import Farming from "@/assets/farming.svg";
import CardTile from "./CardTile";
import useMediaQuery from "@/hooks/useMediaQuery";
import { addCardPair } from "@/services/deck-service";

const Deck: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [deckName, setDeckName] = useState<string>("");
  const [frontCardEntry, setFrontCardEntry] = useState<string>("");
  const [backCardEntry, setBackCardEntry] = useState<string>("");

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
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

  const handleAddCard = (front: string, back: string, deckId: string) => {
    addCardPair(front, back, deckId);
    setFrontCardEntry("");
    setBackCardEntry("");
  };

  return (
    <section
      id="deck"
      className={
        "h-auto w-[100wv] md:h-[100vh] flex flex-col items-center mx-2 mt-[130px]"
      }
    >
      <h1 className="text-4xl font-poppins font-bold text-primary">
        {deckName}
      </h1>
      {/* ADD NEW CARDS */}
      <div className="flex flex-row w-[90%] h-auto justify-between">
        <div className="h-fit w-auto flex flex-row items-center mx-auto my-4 overflow-hidden gap-4 ">
          <input
            type="text"
            value={frontCardEntry}
            placeholder="Enter front"
            className={inputStyling}
            onChange={(e) => setFrontCardEntry(e.target.value)}
          />
          <input
            type="text"
            value={backCardEntry}
            placeholder="Enter back"
            className={inputStyling}
            onChange={(e) => setBackCardEntry(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={() => {
          if (id) {
            handleAddCard(frontCardEntry, backCardEntry, id);
          } else {
            console.error("Deck ID is undefined");
          }
        }}
        className="w-[200px] h-[50px] bg-flower-pink text-white font-bold rounded-full py-2 px-4"
      >
        Add Flashcard
      </button>
      {/* CARD CONTENT AND IMAGE */}
      <div className="flex flex-col md:flex-row w-full  md:w-4/5 h-[100%] m-6 p-6 rounded-2xl gap-12">
        {/* CARDS */}
        <div className="w-2/3">
          <h2 className="text-2xl mb-2">Cards in this deck</h2>
          <CardTile
            cardFront={"1"}
            cardBack={"2"}
            onEdit={function (cardId: number): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (cardId: number): void {
              throw new Error("Function not implemented.");
            }}
            deckId={0}
            cardId={0}
          ></CardTile>
        </div>
        {isAboveMediumScreens ? (
          <>
            {/* IMAGE */}
            <div className="">
              <img src={Farming} className="w-full object-contain h-full" />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Deck;
