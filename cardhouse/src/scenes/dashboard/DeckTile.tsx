import React from "react";

type Props = {
  name: string;
  deckId: string;
  lastViewed?: Date;
  color: string;
};

const DeckTile = ({ name, deckId, lastViewed, color }: Props) => {
  return (
    <div
      className={`mb-4 mr-4 flex items-center justify-center md:text-xl text-sm font-dynapuff h-[80px] w-[100px] md:h-[150px] md:w-[250px] ${color} overflow-hidden rounded-2xl shadow-md shadow-gray-500 text-center`}
    >
      {name}
    </div>
  );
};

export default DeckTile;
