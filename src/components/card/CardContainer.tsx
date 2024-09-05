'use client';
import "./Card.css";
import BackfrontCard from "./BackfrontCard";
import FrontCard from "./FrontCard";
import StartingCard from "./StartingCard";
import randomRootNote from "@/utils/functions/randomRootNote";
import getRandomScale from "@/utils/functions/getRandomScale";
import updateAccidentals from "@/utils/functions/updateAccidentals";
import { useState, useEffect } from "react";
import { CardContainerProps, RootNote, Scale } from "../../utils/types";


const CardContainer : React.FC<CardContainerProps> = ({className, useFlats, useSharps}) =>{
  // Images of the cards
  const imageFront = "/assets/FrontCard.png";
  const imageBack = "/assets/BackCard.png";
  // States
  const [isFlipped, setIsFlipped] = useState(false);
  const [rootNote, setRootNote] = useState(randomRootNote(useFlats, useSharps));
  const [scale, setScale] = useState<Scale | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);
 

// UseEffect to set the rootNote and scale when the component is mounted
  useEffect(() => {
    setRootNote(randomRootNote(useFlats, useSharps));
    setScale(getRandomScale(rootNote.randomRootNote, rootNote.notesDatas) );
    setIsClient(true);
  }, []);

  // Function to flip the card
  const flipCard = () => {
    // Set the state of isFlipped to the opposite of the current state
    setIsFlipped(!isFlipped);
    // setTimeout to avoid the root note to appear before the card is flipped
    setTimeout(() => {
        setRootNote(randomRootNote(useFlats, useSharps));
        setScale(getRandomScale(rootNote.randomRootNote, rootNote.notesDatas) );
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
       {scale && (
          <FrontCard 
            rootNote={rootNote.randomRootNote} 
            scale={scale} 
            imageUrl={imageFront}
          />
       )}

      </div>
    </div>
  );
}

export default CardContainer;