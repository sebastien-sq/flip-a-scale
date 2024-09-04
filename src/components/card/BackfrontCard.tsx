import Image from 'next/image'

export default function BackfrontCard( {key} : {key: number} ) {
    return(
    <div key={key} className="card__face card__face--back flex justify-center items-center rounded-md">
            <Image src="/assets/1.png" alt="backfront card" height={500} width={400} className="z-0 rounded-md"/>
          </div>)
}