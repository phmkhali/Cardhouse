import React from 'react'

type Props = {
    name: string,
    deckId: string,
    lastViewed?: Date,
}

const DeckTile = ({name, deckId, lastViewed}: Props) => {
  return (
    <div className="mb-4 mr-4 flex items-center justify-center text-xl h-[150px] w-[250px] bg-flower-pink rounded-2xl shadow-sm text-center">{name}</div>
  )
}

export default DeckTile