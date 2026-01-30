import { useState, useEffect } from "react";

interface WishMakerProps {
  onBack: () => void;
}

const WishMaker = ({ onBack }: WishMakerProps) => {
  const [showWishes, setShowWishes] = useState(false);
  const [visibleWishes, setVisibleWishes] = useState<number>(0);

  const wishes = [
    "To share countless sunsets with you, Poorvi",
    "To make my cutie Poorvi smile every day",
    "To build our dreams together, Poorvi",
    "To create a lifetime of memories with you",
    "To always be your safe place, my cutie",
    "To travel the world hand in hand with Poorvi",
    "To fill our home with love and laughter with you",
    "To support you through every challenge, Poorvi",
    "To grow old with you—hearts forever young",
    "To wake up next to Poorvi every morning",
    "To celebrate every little victory with my cutie",
    "To be your greatest adventure, Poorvi",
    "To write our love story that never ends",
    "To always dance in the kitchen with Poorvi",
    "To cherish you every single day, my cutie",
    "To love Poorvi more with every heartbeat",
    "To always remind you how special you are",
    "To hold Poorvi's hand through every season",
    "To be your best friend, always and forever—Poorvi",
  ];

  useEffect(() => {
    if (showWishes && visibleWishes < wishes.length) {
      const timer = setTimeout(() => {
        setVisibleWishes((prev) => prev + 1);
      }, 500); // Adjust timing as needed (500ms = 0.5s)

      return () => clearTimeout(timer);
    }
  }, [showWishes, visibleWishes, wishes.length]);

  const allWishesLoaded = visibleWishes === wishes.length;

  if (allWishesLoaded) {
  }

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-3xl text-primary font-bold">My Wishes For You, Poorvi</h2>
      <div className="w-full max-w-4xl h-[60vh] overflow-y-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showWishes &&
            wishes.slice(0, visibleWishes).map((wish, index) => (
              <div
                key={index}
                className="p-4 bg-primary bg-opacity-10 rounded-lg animate-fade-in"
              >
                <p className="text-lg">✨ {wish}</p>
              </div>
            ))}
        </div>
      </div>
      {!showWishes ? (
        <button onClick={() => setShowWishes(true)} className="btn btn-primary">
          See My Wishes
        </button>
      ) : visibleWishes < wishes.length ? (
        <div className="text-primary">
          Loading wishes... {visibleWishes}/{wishes.length}
        </div>
      ) : (
        <button onClick={onBack} className="btn btn-primary">
          Back to Charms
        </button>
      )}
    </div>
  );
};

export default WishMaker;
