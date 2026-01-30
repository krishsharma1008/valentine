import letter from "../assets/cards/charms/letter.png";
import key from "../assets/cards/charms/key.png";
import heart from "../assets/cards/charms/heart.png";

interface TarotsGiftProps {
  onNext: () => void;
  onLetterClick: () => void;
  onKeyClick: () => void;
  onHeartClick: () => void;
  visitedCharms: Set<string>;
  allCharmsVisited: boolean;
}

const TarotsGift = ({
  onNext,
  onLetterClick,
  onKeyClick,
  onHeartClick,
  visitedCharms,
  allCharmsVisited,
}: TarotsGiftProps) => {
  const handleCharmClick = (charm: string, onClick: () => void) => {
    if (charm == "") {
    }
    onClick();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">The Tarot's Gift for Poorvi</h2>
      <p className="text-lg text-primary mb-4 max-w-lg">
        Three mystical charms have appeared for you, Poorvi. Each holds a special meaning for
        our journey together, my cutie.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-2">
        <div
          className={`flex flex-col items-center gap-3 p-4 rounded-lg cursor-pointer
            transition-all duration-300 hover:scale-105 bg-base-100 shadow-lg
            ${visitedCharms.has("letter") ? "opacity-50" : ""}`}
          onClick={() => handleCharmClick("letter", onLetterClick)}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 flex items-center justify-center rounded-full">
            <img
              src={letter}
              alt="Letter"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            Eternal Scroll
          </h3>
          <p className="text-sm text-gray-600">
            A love letter for Poorvi—a hidden message from destiny for my cutie.
          </p>
        </div>

        <div
          className={`flex flex-col items-center gap-3 p-4 rounded-lg cursor-pointer
            transition-all duration-300 hover:scale-105 bg-base-100 shadow-lg
            ${visitedCharms.has("key") ? "opacity-50" : ""}`}
          onClick={() => handleCharmClick("key", onKeyClick)}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 flex items-center justify-center rounded-full">
            <img
              src={key}
              alt="Key"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary">Key</h3>
          <p className="text-sm text-gray-600">
            Unlocking emotions, trust, and the future with Poorvi, my cutie.
          </p>
        </div>

        <div
          className={`flex flex-col items-center gap-3 p-4 rounded-lg cursor-pointer
            transition-all duration-300 hover:scale-105 bg-base-100 shadow-lg
            col-span-1 sm:col-span-2 md:col-span-1 mx-auto w-full
            ${visitedCharms.has("heart") ? "opacity-50" : ""}`}
          onClick={() => handleCharmClick("heart", onHeartClick)}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 flex items-center justify-center rounded-full">
            <img
              src={heart}
              alt="Heart"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            Endless Love
          </h3>
          <p className="text-sm text-gray-600">
            Deep, unbreakable love for Poorvi—forever united with my cutie.
          </p>
        </div>
      </div>

      {allCharmsVisited && (
        <button onClick={onNext} className="btn btn-primary mt-6">
          Continue
        </button>
      )}
    </div>
  );
};

export default TarotsGift;
