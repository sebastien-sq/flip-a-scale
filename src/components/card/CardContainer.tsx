'use client';
import "./Card.css";
import BackfrontCard from "./BackfrontCard";
import FrontCard from "./FrontCard";
import StartingCard from "./StartingCard";
import randomRootNote from "./functions/randomRootNote";
import getRandomScale from "./functions/getRandomScale";
import { useState, useEffect } from "react";
import { CardContainerProps, RootNote, Scale } from "../../utils/types";


const CardContainer : React.FC<CardContainerProps> = ({className}) =>{
  // Images of the cards
  const imageFront = "/assets/FrontCard.png";
  const imageBack = "/assets/BackCard.png";
  // States
  const [isFlipped, setIsFlipped] = useState(false);
  const [rootNote, setRootNote] = useState(randomRootNote());
  const [scale, setScale] = useState<Scale>();
  const [isClient, setIsClient] = useState(false);

// UseEffect to set the rootNote and scale when the component is mounted
  useEffect(() => {
    setRootNote(randomRootNote());
    setScale(getRandomScale(rootNote) );
    setIsClient(true);
  }, []);

  // Function to flip the card
  const flipCard = () => {
    setIsFlipped(!isFlipped);
    // setTimeout to avoid the root note to appear before the card is flipped
    setTimeout(() => {
        setRootNote(randomRootNote());
        setScale(getRandomScale(rootNote) );
        }, 300);
  };
if(!isClient) return <StartingCard imageUrl={imageBack} />;

    return (
    // Card Container
    <div className={` ${className} card-container ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
      <div className="card">
      {isFlipped ? null :  <StartingCard imageUrl={imageBack} /> }

        {/*3 Backfront cards, multiples ones so the card seems to flip multiple times */}
    {[1, 2, 3].map((_, index) => (
          <BackfrontCard key={index} imageUrl={imageBack}/>
        ))}
        
        {/* Front Card */}
       <FrontCard rootNote={rootNote} scale={scale} imageUrl={imageFront}/>

      </div>
    </div>
  );
}

export default CardContainer;