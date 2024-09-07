"use client";
import "./Card.css";
import StartingCard from "./StartingCard";
import BackfrontCard from "./BackfrontCard";
import FrontCard from "./FrontCard";
import getRandomRootNote from "@/utils/functions/getRandomRootNote";
import getRandomScale from "@/utils/functions/getRandomScale";
import updateAccidentals from "@/utils/functions/updateAccidentals";
import { useState, useEffect } from "react";
import { CardContainerProps, RootNote, Scale } from "../../utils/types";

const CardContainer: React.FC<CardContainerProps> = ({
  className,
  useFlats,
  useSharps,
}) => {
  // Images of the cards
  const imageFront = "/assets/FrontCard.png";
  const imageBack = "/assets/BackCard.png";
  // States
  const [isStarting, setIsStarting] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [newRootNote, setNewRootNote] = useState(
    getRandomRootNote(useFlats, useSharps)
  );
  const [scale, setScale] = useState<Scale | undefined>(undefined);



  // Function to flip the card
  const flipCard = () => {
    // Set the state of isFlipped to the opposite of the current state
    setIsFlipped(!isFlipped);
    // Set the state of isStarting to false as the game has started
    setIsStarting(false);
    // setTimeout to avoid the root note to appear before the card is flipped
    setTimeout(() => {
      setNewRootNote(getRandomRootNote(useFlats, useSharps));
      setScale(
        getRandomScale(newRootNote.randomRootNote, newRootNote.notesDatas)
      );
    }, 300);
  };

  return (
    <div
      className={`${className} card-container ${isFlipped ? "is-flipped" : ""}`}
      onClick={flipCard}
    >
      <div className="card">
        {isStarting ? (
          <StartingCard imageUrl={imageBack} />
        ) : (
          <>
              {/* Starting card with opacity 1 if isStarting is true, 0 otherwise, to avoid the card to disappear when the game starts */}
              <StartingCard imageUrl={imageBack} style={{opacity: isStarting ? 1 : 0}} />
              <BackfrontCard  imageUrl={imageBack} />
            {scale && (
              <FrontCard
                rootNote={newRootNote.randomRootNote}
                scale={scale}
                imageUrl={imageFront}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
