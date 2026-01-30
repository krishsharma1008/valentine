import gif from "../assets/gif/welcome.gif";

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <img src={gif} alt="Welcome" className="w-1/2" />
      <h1 className="text-4xl text-primary font-bold">Welcome, Poorvi My Cutie</h1>
      <p className="text-lg max-w-2xl text-primary font-bold">
        I've prepared something special just for you, Poorvi—an enchanting journey through
        mystery, emotion, and dreams. Each step will reveal a piece of my heart,
        guiding you through a world of meaning, connection, and love. Every moment
        holds something just for my cutie. ✨❤️
      </p>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg transition-all bg-primary text-primary-content hover:bg-primary-focus"
      >
        Begin Journey
      </button>
    </div>
  );
};

export default Welcome;
