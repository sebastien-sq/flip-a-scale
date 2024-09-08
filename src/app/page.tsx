'use client';
import CardContainer from "../components/card/CardContainer";
import CheckboxContainer from "@/components/checkboxes/CheckboxContainer";
import ScalesContainer from "@/components/scales/ScalesContainer";
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [useFlats, setUseFlats] = useState(false);
  const [useSharps, setUseSharps] = useState(false);

  const handleAccidentalChange = (accidental: {useFlats: boolean, useSharps: boolean}) => {
    setUseFlats(accidental.useFlats);
    setUseSharps(accidental.useSharps);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24 relative">
      <div className="flex flex-col items-center justify-between ">
        <h1 className="text-4xl font-bold mb-10">Flip a scale ! 🎶</h1>
        <h2 className="text-2xl">Just tap a card to reveal a random scale, then improvise with it !</h2>
      </div>
      <div className="flex flex-col items-center justify-between p-8 ">
        <CardContainer className="m-20 flex flex-col items-center justify-center" useFlats={useFlats} useSharps={useSharps}/>
        <ScalesContainer />
        <CheckboxContainer className="m-10 flex row items-center justify-center" onAccidentalChange={handleAccidentalChange} />
      </div>
      <footer className="absolute bottom-20 h-20 flex flex-col items-center justify-between">
        <p >
          Made with ❤️ by B3SS ; 
          <a
            href="www.seawebstudio.com"/>
        </p>
        <p className="hover:scale-110"><a href="https://github.com/ThisIsB3SS" ><Image src="/assets/github.png" height={50} width={30} alt='Developper"s github link'/></a></p>
            </footer>
      </main>
  );
}
