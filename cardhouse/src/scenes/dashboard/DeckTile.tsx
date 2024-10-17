import React from "react";

type Props = {
  name: string;
  deckId: string;
  lastViewed?: Date;
  color: string;
  onClick: (deckId: string) => void;
};

const DeckTile = ({ name, deckId, lastViewed, color, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(deckId)}
      className={`mb-4 mr-4 flex items-center justify-center md:text-xl text-sm font-dynapuff h-[80px] w-[100px] md:h-[150px] md:w-[250px] ${color} overflow-hidden rounded-2xl shadow-md shadow-gray-500 text-center hover:scale-95`}
    >
      {name}
    </div>
  );
};

export default DeckTile;
