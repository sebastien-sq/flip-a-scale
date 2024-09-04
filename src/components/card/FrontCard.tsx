import Image from 'next/image';

export default function FrontCard({rootNote} : {rootNote: string}) {
    return(
    <div className="card__face card__face--front flex justify-center items-center relative rounded-md">
    <Image src="/assets/3.png" alt="card" height={500} width={400} className="z-0 rounded-md" />
    <h3 className="absolute top-30 left-30 z-50 h-10 font-bold size-10 text-black">{rootNote}</h3>
  </div>)
}