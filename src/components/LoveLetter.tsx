import { useState } from "react";

interface LoveLetterProps {
  onBack: () => void;
}

const LoveLetter = ({ onBack }: LoveLetterProps) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-3xl text-primary font-bold">
        {isUnfolded ? "Here's your letter, Poorvi" : "Poorvi, you received a letter!"}
      </h2>
      {!isUnfolded && (
        <p className="text-lg text-primary">
          Press Open Letter in order to read it
        </p>
      )}
      <div
        className={`transition-all duration-1000 ${
          isUnfolded ? "scale-100" : "scale-0"
        }`}
      >
        <div className="max-w-2xl p-8 bg-pink-50 rounded-lg shadow-lg">
          <h2 className="text-3xl text-primary font-bold mb-6">
            My Dearest Poorvi, My Cutie
          </h2>
          <p className="text-lg leading-relaxed">
            Every moment with you, Poorvi, is a treasure—every laugh a melody, and every
            hug a little piece of home. You make my world brighter just by being
            in it, and I'm so grateful for my cutie. May your days be filled with
            joy, your heart with warmth, and your dreams with endless
            possibilities. I love you, Poorvi.
          </p>
          <p className="text-right mt-8">With all my love,</p>
          <p className="text-right">❤️ For Poorvi, always</p>
        </div>
      </div>
      {!isUnfolded ? (
        <button onClick={() => setIsUnfolded(true)} className="btn btn-primary">
          Open Letter
        </button>
      ) : (
        <button onClick={onBack} className="btn btn-primary">
          Back to Charms
        </button>
      )}
    </div>
  );
};

export default LoveLetter;
