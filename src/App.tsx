import { useEffect, useState, useMemo } from "react";
import { CardRevealer } from "./components/CardRevealer";
import Welcome from "./components/Welcome";
import LastPage from "./components/LastPage";
import DeckSelector from "./components/DeckSelector";
import ReadingIntro from "./components/ReadingIntro";
import StyleSelector from "./components/StyleSelector";
import LoveLetter from "./components/LoveLetter";
import WishMaker from "./components/WishMaker";
import TarotsGift from "./components/TarotsGift";
import UnityPage from "./components/UnityPage";
import FinalReveal from "./components/FinalReveal";
import PromisesPage from "./components/PromisesPage";
import ValentinePage from "./components/ValentinePage";
import CongratulationsPage from "./components/CongratulationsPage";

import back1 from "./assets/cards/bg_1.png";
import back2 from "./assets/cards/bg_2.png";
import back3 from "./assets/cards/bg_3.png";
import back4 from "./assets/cards/bg_4.png";
import back5 from "./assets/cards/bg_5.png";

import card1 from "./assets/cards/1_lovers.png";
import card2 from "./assets/cards/2_wheel.png";
import card3 from "./assets/cards/3_star.png";

import card1fancy from "./assets/cards/fancy/1_lovers.jpg";
import card2fancy from "./assets/cards/fancy/2_wheel.jpg";
import card3fancy from "./assets/cards/fancy/3_star.png";

// Import heart images
import heart1 from "./assets/hearts/heart_lila.png"; // Adjust paths as needed
import heart2 from "./assets/hearts/heart_mov.png";
import heart3 from "./assets/hearts/heart_pink.png";
import heart4 from "./assets/hearts/heart_red.png";
import heart5 from "./assets/hearts/heart_red_light.png";

import "./index.css";
import { Snowfall } from "react-snowfall";

interface Card {
  front: string;
  message: string;
}

const cards: Card[] = [
  {
    front: card1,
    message:
      "Poorvi, you're the magic that happens when two souls truly meet—our connection is written in the stars.",
  },
  {
    front: card2,
    message:
      "Fate spun our lives together, my cutie—every twist and turn only makes my love for you, Poorvi, stronger.",
  },
  {
    front: card3,
    message:
      "With you, Poorvi, the future shines with hope and endless dreams—as bright and beautiful as you are.",
  },
];

type Page =
  | "welcome"
  | "deck-select"
  | "style-select"
  | "reading-intro"
  | "cards"
  | "tarots-gift"
  | "love-letter"
  | "wish-maker"
  | "unity-page"
  | "final-reveal"
  | "promises"
  | "valentine"
  | "congratulations"
  | "last";

export const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("welcome");
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hearts, setHearts] = useState<HTMLImageElement[]>([]);
  const [selectedDeck, setSelectedDeck] = useState(back1); // Default deck
  const [cardStyle, setCardStyle] = useState<"regular" | "fancy">("regular");
  const [visitedCharms, setVisitedCharms] = useState<Set<string>>(new Set());

  const decks = [back1, back2, back3, back4, back5];

  const regularCards = cards.map((card) => card.front);
  const fancyCards = [card1fancy, card2fancy, card3fancy];

  const allCharmsVisited = useMemo(() => {
    return visitedCharms.size === 3;
  }, [visitedCharms]);

  const handleDeckSelect = (deckImage: string) => {
    setSelectedDeck(deckImage);
    setCurrentPage("style-select");
  };

  const handleStyleSelect = (style: "regular" | "fancy") => {
    setCardStyle(style);
    setCurrentPage("reading-intro");
  };

  const getCurrentCards = () => {
    return cardStyle === "regular" ? regularCards : fancyCards;
  };

  const handleNextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    } else {
      setCurrentPage("tarots-gift");
    }
  };

  useEffect(() => {
    const heartImages = [heart1, heart2, heart3, heart4, heart5];

    const createHeartImage = (imageSrc: string, id: string) => {
      const img = document.createElement("img");
      img.id = id;
      img.src = imageSrc;
      return img;
    };

    const heartElements = heartImages.map((src, index) =>
      createHeartImage(src, `heart${index + 1}`)
    );

    setHearts(heartElements);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case "welcome":
        return <Welcome onNext={() => setCurrentPage("deck-select")} />;
      case "deck-select":
        return <DeckSelector onSelect={handleDeckSelect} decks={decks} />;
      case "style-select":
        return <StyleSelector onSelect={handleStyleSelect} />;
      case "reading-intro":
        return <ReadingIntro onNext={() => setCurrentPage("cards")} />;
      case "cards":
        return (
          <div className="font-poppins flex flex-col items-center gap-8 p-4 z-10">
            <CardRevealer
              key={currentCard}
              img_back={selectedDeck}
              img_front={getCurrentCards()[currentCard]}
              width="w-full md:w-1/2"
              message={cards[currentCard].message}
              onFlip={() => setIsFlipped(true)}
            />

            <button
              onClick={handleNextCard}
              disabled={!isFlipped}
              className={`px-6 py-2 rounded-lg transition-all ${
                !isFlipped
                  ? "bg-neutral-content text-content cursor-not-allowed"
                  : "bg-primary text-primary-content cursor-pointer"
              }`}
            >
              {currentCard === cards.length - 1 ? "Continue" : "Next Reading"}
            </button>
          </div>
        );
      case "tarots-gift":
        return (
          <TarotsGift
            onNext={() => setCurrentPage("final-reveal")}
            onLetterClick={() => {
              setVisitedCharms((prev) => new Set([...prev, "letter"]));
              setCurrentPage("love-letter");
            }}
            onKeyClick={() => {
              setVisitedCharms((prev) => new Set([...prev, "key"]));
              setCurrentPage("wish-maker");
            }}
            onHeartClick={() => {
              setVisitedCharms((prev) => new Set([...prev, "heart"]));
              setCurrentPage("unity-page");
            }}
            visitedCharms={visitedCharms}
            allCharmsVisited={allCharmsVisited}
          />
        );
      case "love-letter":
        return <LoveLetter onBack={() => setCurrentPage("tarots-gift")} />;
      case "wish-maker":
        return <WishMaker onBack={() => setCurrentPage("tarots-gift")} />;
      case "unity-page":
        return <UnityPage onBack={() => setCurrentPage("tarots-gift")} />;
      case "final-reveal":
        return <FinalReveal onNext={() => setCurrentPage("promises")} />;
      case "promises":
        return <PromisesPage onNext={() => setCurrentPage("valentine")} />;
      case "valentine":
        return (
          <ValentinePage onNext={() => setCurrentPage("congratulations")} />
        );
      case "congratulations":
        return <CongratulationsPage onNext={() => setCurrentPage("last")} />;
      case "last":
        return <LastPage />;
    }
  };

  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        snowflakeCount={70}
        images={hearts}
        wind={[-0.5, 0.5]}
        radius={[15, 30.0]}
        speed={[0.5, 1.0]}
        opacity={[0.05, 0.2]}
        rotationSpeed={[-0.5, 0.5]}
      />
      <div className="min-h-screen w-full flex items-center justify-center relative z-10">
        {renderContent()}
      </div>
    </>
  );
};
