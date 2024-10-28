import React from "react";

type Props = {
  cardFront: string;
  cardBack: string;
  onEdit: (cardId: number) => void;
  onDelete: (cardId: number) => void;
  deckId: number;
};

const CardTile = ({ cardFront, cardBack }: Props) => {
  const cardStyling =
    "w-[100%] md:w-1/2 min-h-[100px] h-auto bg-gray-200 p-4 rounded-2xl text-text text-center break-words";

  return (
    <div className="bg-green-200 w-[150%] md:w-auto h-auto py-2 flex flex-col md:flex-row justify-between gap-2 overflow-x-hidden">
      <div className={cardStyling}>
        <h3>{cardFront}</h3>
      </div>
      <div className={cardStyling}>
        <h3>{cardBack}</h3>
      </div>
    </div>
  );
};

export default CardTile;
