import React from "react";
import DeckTile from "./DeckTile";
import { Deck } from "@/shared/types";
import { useNavigate } from "react-router-dom";

type DeckListProps = {
  deckList: Deck[];
  getRandomColor: () => string;
};

const DeckList: React.FC<DeckListProps> = ({ deckList, getRandomColor }) => {
  const navigate = useNavigate();
  const openDeckOverview = (deckId: string) => {
    console.log("Opening deck:", deckId);
    navigate(`/deck/${deckId}`);
  };

  return (
    <div className="w-[90%] h-auto flex flex-row flex-wrap overflow-hidden-500 pt-2">
      {deckList.map((deck) => (
        <DeckTile
          key={deck.id}
          name={deck.name}
          deckId={deck.id}
          color={getRandomColor()}
          onClick={openDeckOverview}
        />
      ))}
    </div>
  );
};

export default DeckList;
