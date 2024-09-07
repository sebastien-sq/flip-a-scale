import { StartingCardProps } from '@/utils/types'
import Image from 'next/image'

const StartingCard : React.FC<StartingCardProps> = ({imageUrl}) => {

    return(
    <div className="card__face card__face--starting flex justify-center items-center rounded-md" >
            <Image src={imageUrl} alt="starting card" height={500} width={400} className="z-0 rounded-md"/>
          </div>)
}

export default StartingCard;