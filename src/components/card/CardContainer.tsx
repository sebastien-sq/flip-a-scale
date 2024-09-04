'use client';
import "./Card.css";
import randomRootNote from "./functions/randomRootNote";
import { useState, useEffect } from "react";
import BackfrontCard from "./BackfrontCard";
import FrontCard from "./FrontCard";
import StartingCard from "./StartingCard";

export default function CardContainer({className} : {className: string}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rootNote, setRootNote] = useState(randomRootNote());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setRootNote(randomRootNote());
    setIsClient(true);
  }, []);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    // setTimeout to avoid the root note to appear before the card is flipped
    setTimeout(() => {
        setRootNote(randomRootNote());
        }, 300);
  };
if(!isClient) return <StartingCard />;
  return (
    <div className={` ${className} card-container ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
      <div className="card">
      {isFlipped ? null :  <StartingCard /> }
        {/*3 Backfront cards, multiples ones so the card seems to flip multiple times */}
    {[1, 2, 3].map((_, index) => (
          <BackfrontCard key={index}/>
        ))}
        
        {/* Front Card */}
       <FrontCard rootNote={rootNote}/>

      </div>
    </div>
  );
}
