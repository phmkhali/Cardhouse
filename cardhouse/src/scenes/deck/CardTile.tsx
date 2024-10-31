import React from "react";
import { BsFillPencilFill } from "react-icons/bs"; 
import { BsFillTrashFill } from "react-icons/bs";

type Props = {
  cardId: number; // Add cardId here to pass it to onEdit and onDelete
  cardFront: string;
  cardBack: string;
  onEdit: (cardId: number) => void;
  onDelete: (cardId: number) => void;
  deckId: number;
};

const CardTile = ({ cardId, cardFront, cardBack, onEdit, onDelete }: Props) => {
  const cardStyling =
    "w-[100%] md:w-1/2 min-h-[100px] h-auto bg-gray-200 p-4 rounded-2xl text-text text-center break-words";

  return (
    <div className="w-[150%] md:w-auto h-auto py-2 flex flex-col md:flex-row justify-between gap-2 overflow-x-hidden">
      <div className={cardStyling}>
        <h3>{cardFront}</h3>
      </div>
      <div className={cardStyling}>
        <h3>{cardBack}</h3>
      </div>
      <div className="flex flex-col justify-around">
        {/* Edit Button */}
        <button
          className="text-accent text-2xl"
          onClick={() => onEdit(cardId)}
        >
          <BsFillPencilFill />
        </button>
        {/* Delete Button */}
        <button
          className=" text-flower-pink text-2xl"
          onClick={() => onDelete(cardId)}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default CardTile;
