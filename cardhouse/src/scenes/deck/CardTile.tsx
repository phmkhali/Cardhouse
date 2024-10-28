import React from "react";

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
      <div className="flex justify-end gap-2 mt-2">
        {/* Edit Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => onEdit(cardId)}
        >
          Edit
        </button>
        {/* Delete Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => onDelete(cardId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardTile;
