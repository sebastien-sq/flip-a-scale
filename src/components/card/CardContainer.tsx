"use client";
import "./Card.css";
import StartingCard from "./StartingCard";
import BackfrontCard from "./BackfrontCard";
import FrontCard from "./FrontCard";
import getRandomRootNote from "@/utils/functions/getRandomRootNote";
import getRandomScale from "@/utils/functions/getRandomScale";
import generateScales from "../scales/generateScales";
import { useState } from "react";
import { CardContainerProps,  Scale, RootNote } from "@/utils/types";

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
  const [newRootNote, setNewRootNote] = useState<RootNote>();
  const [newScale, setNewScale] = useState<Scale>();

  // Function to flip the card
  const flipCard = () => {
    // Set the state of isFlipped to the opposite of the current state
    setIsFlipped(!isFlipped);
    // Set the state of isStarting to false as the game has started
    setIsStarting(false);
    // setTimeout to avoid the root note to appear before the card is flipped
    setTimeout(() => {
      const rootNote = getRandomRootNote(useFlats, useSharps);
      setNewRootNote(rootNote);
      const scale = getRandomScale(rootNote);
      setNewScale(scale);
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
            {newScale && newRootNote && (
              <FrontCard
                rootNote={newRootNote}
                scale={newScale}
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
