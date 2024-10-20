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
    "min-w-[50%] w-full min-h-[100px] h-auto bg-gray-500 p-4 rounded-2xl text-white text-center break-words";

  return (
    <div className="w-full h-auto py-2 flex flex-row justify-between gap-2">
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
