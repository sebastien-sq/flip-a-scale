import { StartingCardProps } from "@/utils/types";
import BackfrontCard from "./BackfrontCard";

const StartingCard : React.FC<StartingCardProps> = ({imageUrl}) => {
    return(
        <BackfrontCard key={1} imageUrl={imageUrl}/>
    )
}

export default StartingCard;