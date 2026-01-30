import { useState, useEffect, useRef } from "react";
import valentineGif from "../assets/gif/valentine.gif"; // You'll need to add this gif

interface ValentinePageProps {
  onNext: () => void;
}

const ValentinePage = ({ onNext }: ValentinePageProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hasMovedOnce, setHasMovedOnce] = useState(false);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!hasMovedOnce) {
      // First position: right below the Yes button
      const yesButton = yesButtonRef.current?.getBoundingClientRect();
      if (yesButton) {
        setNoButtonPosition({
          x: yesButton.left,
          y: yesButton.bottom + 20, // 20px gap
        });
        setHasMovedOnce(true);
        return;
      }
    }

    // Center area bounds (60% of viewport)
    const centerWidth = window.innerWidth * 0.6;
    const centerHeight = window.innerHeight * 0.6;
    const startX = (window.innerWidth - centerWidth) / 2;
    const startY = (window.innerHeight - centerHeight) / 2;

    // Random position within center area
    const x = startX + Math.random() * centerWidth;
    const y = startY + Math.random() * centerHeight;

    setNoButtonPosition({
      x: Math.max(50, Math.min(window.innerWidth - 150, x)),
      y: Math.max(50, Math.min(window.innerHeight - 100, y)),
    });
  };

  useEffect(() => {
    moveNoButton();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 relative">
      <img
        src={valentineGif}
        alt="Valentine"
        className="w-64 h-64 object-contain mb-8"
      />

      <h1 className="text-3xl text-primary font-bold mb-8">
        Poorvi, will you be my Valentine?
      </h1>

      <div className="flex gap-4">
        <button
          ref={yesButtonRef}
          onClick={onNext}
          className="btn btn-primary px-8"
        >
          Yes!
        </button>

        <button
          className="btn btn-outline fixed"
          style={{
            left: noButtonPosition.x,
            top: noButtonPosition.y,
            transition: "all 0.2s ease-out",
          }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ValentinePage;
