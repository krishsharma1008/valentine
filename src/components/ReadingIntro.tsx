import tarot from "../assets/gif/tarot.gif";

interface ReadingIntroProps {
  onNext: () => void;
}

const ReadingIntro = ({ onNext }: ReadingIntroProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <img src={tarot} alt="Tarot" className="w-1/2" />
      <h2 className="text-3xl text-primary font-bold">Our Future Together, Poorvi</h2>
      <div className="text-lg max-w-2xl text-primary font-bold space-y-4">
        <p>
          Now that you've chosen your deck, Poorvi, let's explore what the cards reveal
          about our journey together, my cutie.
        </p>
        <p>
          I've prepared three special readings for you—each offering a glimpse into
          different aspects of our shared future with Poorvi.
        </p>
        <p className="text-xl mt-6">
          Are you ready to discover what the cards have in store for us, Poorvi?
        </p>
      </div>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg transition-all bg-primary text-primary-content hover:bg-primary-focus"
      >
        Begin Reading
      </button>
    </div>
  );
};

export default ReadingIntro;
