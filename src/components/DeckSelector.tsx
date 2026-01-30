import { useState } from "react";

interface DeckSelectorProps {
  onSelect: (backgroundImage: string) => void;
  decks: string[];
}

const DeckSelector = ({ onSelect, decks }: DeckSelectorProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  const handleContinue = () => {
    if (selectedCard !== null) {
      onSelect(decks[selectedCard]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">Choose Your Deck, Poorvi</h2>
      <p className="text-lg max-w-2xl text-primary font-bold mb-4">
        I know you like tarot, Poorvi—so I've prepared different deck styles for my cutie. Choose
        the one that speaks to your heart for your reading.
      </p>

      <div className="relative h-96 w-96">
        {decks.map((deck, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="absolute left-1/2 top-1/2 w-48 h-72
              transition-all duration-500 cursor-pointer"
            style={{
              transform:
                selectedCard === index
                  ? "translate(-50%, -100%) scale(1.1)"
                  : `translate(-50%, -50%) rotate(${(index - 2) * 15}deg)`,
              transformOrigin: "center 120%",
              zIndex: selectedCard === index ? 20 : 10 + index,
            }}
          >
            <div
              className="w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              style={{
                backgroundImage: `url(${deck})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={selectedCard === null}
        className={`px-6 py-2 rounded-lg transition-all mt-8
          ${
            selectedCard === null
              ? "bg-neutral-content text-content cursor-not-allowed"
              : "bg-primary text-primary-content cursor-pointer hover:bg-primary-focus"
          }`}
      >
        Continue with Selected Deck
      </button>
    </div>
  );
};

export default DeckSelector;
