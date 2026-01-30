interface FinalRevealProps {
  onNext: () => void;
}

const FinalReveal = ({ onNext }: FinalRevealProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">Our Journey with Poorvi Continues</h2>
      <p className="text-lg max-w-2xl">
        You've discovered all three mystical charms, Poorvi—the sealed letter of our
        destiny, the key to our shared future, and the eternal bond of our
        hearts. Together they tell the story of my love for you, my cutie—a story still
        being written with every moment we share.
      </p>
      <button onClick={onNext} className="btn btn-primary mt-8">
        Continue Our Story
      </button>
    </div>
  );
};

export default FinalReveal;
