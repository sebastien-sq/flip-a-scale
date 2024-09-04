import Image from 'next/image';
import { FrontCardProps } from '../../utils/types';


const FrontCard: React.FC<FrontCardProps> = ({ rootNote, scale, imageUrl }) => {	
    return(
    <div className="card__face card__face--front flex justify-center items-center relative rounded-md">
    <Image src={imageUrl} alt="card" height={500} width={400} className="z-0 rounded-md" />
    <h3 className="absolute top-40 left-30 z-50 h-10 font-bold text-5xl text-black">{rootNote.name}</h3>

    {scale && <h4 className="absolute bottom-30 left-30 z-50 h-10 font-bold text-3xl text-black">{scale.name}</h4>}
    
  </div>)
}

export default FrontCard;