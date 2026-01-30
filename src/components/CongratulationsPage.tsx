import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import gift from "../assets/gif/gift.gif"; // Add a gift gif to your assets

interface CongratulationsPageProps {
  onNext: () => void;
}

const CongratulationsPage = ({ onNext }: CongratulationsPageProps) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 relative">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={true}
      />

      <h1 className="text-4xl text-primary font-bold mb-8 text-center animate-fade-in">
        Congratulations! 🎉
      </h1>

      <h2 className="text-2xl text-primary mb-8 text-center animate-fade-in">
        Poorvi said yes—you're my Valentine, my cutie! ❤️
      </h2>

      <img
        src={gift}
        alt="Gift"
        className="w-64 h-64 object-contain mb-8 animate-bounce"
      />

      <button onClick={onNext} className="btn btn-primary mt-8 animate-fade-in">
        The End ❤️
      </button>
    </div>
  );
};

export default CongratulationsPage;
