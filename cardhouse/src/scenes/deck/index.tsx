import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Deck: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [deckName, setDeckName] = useState<string>("");

  useEffect(() => {
    if (id) {
      setDeckName(id); 
    }
  }, [id]);

  return (
    <div>
      <h1>Deck: {deckName}</h1>
    </div>
  );
};

export default Deck;
