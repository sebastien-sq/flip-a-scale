import { BackfrontCardProps } from '@/utils/types'
import Image from 'next/image'

const BackfrontCard : React.FC<BackfrontCardProps> = ({imageUrl}) => {
    return(
    <div className="card__face card__face--back flex justify-center items-center rounded-md">
            <Image src={imageUrl} alt="backfront card" height={500} width={400} className="z-0 rounded-md"/>
          </div>)
}

export default BackfrontCard;