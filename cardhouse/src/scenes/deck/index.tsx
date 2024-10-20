import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeckById } from "@/services/deck-service";
import Farming from "@/assets/farming.svg"

const Deck: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [deckName, setDeckName] = useState<string>("");

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
    <section
      id="deck"
      className="h-auto w-[100wv] md:h-[100vh] flex flex-col items-center mt-[130px] md:mx-6"
    >
      <h1 className="text-4xl font-bold text-primary">{deckName}</h1>

      <div className="flex flex-row w-[90%] h-auto justify-between ">
        <div className="h-auto w- flex flex-row my-4 overflow-hidden gap-2 bg-red-300">
          <input
            type="text"
            value=""
            placeholder="Enter front"
            className="w-[200px] h-[40px] mb-2 px-2 border border-gray-300 rounded"
            onChange={(e) => console.log("added: ")}
          />
          <input
            type="text"
            value=""
            placeholder="Enter back"
            className="w-[200px] h-[40px] mb-2 px-2 border border-gray-300 rounded"
            onChange={(e) => console.log("added: ")}
          />

          <button className="w-[200px] h-[50px] bg-accent text-white font-bold rounded-full py-2 px-4">
            Add Flashcard
          </button>
        </div>
        <div className="w-auto">
          <img src={Farming} className="object-contain h-4/5"/>
        </div>
      </div>
    </section>
  );
};

export default Deck;
