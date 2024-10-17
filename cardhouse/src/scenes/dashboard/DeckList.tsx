import React from "react";
import DeckTile from "./DeckTile";
import { Deck } from "@/shared/types";

type DeckListProps = {
  deckList: Deck[];
  getRandomColor: () => string;
};

const DeckList: React.FC<DeckListProps> = ({ deckList, getRandomColor }) => {
  return (
    <div className="w-[90%] h-auto flex flex-row flex-wrap overflow-hidden-500 pt-2">
      {deckList.map((deck) => (
        <DeckTile key={deck.id} name={deck.name} deckId={deck.id} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default DeckList;
