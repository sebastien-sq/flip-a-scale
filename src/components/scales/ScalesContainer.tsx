import { ScalesContainerProps } from "@/utils/types";

const ScalesContainer : React.FC<ScalesContainerProps> = ({ datas}) => {
    
    return (
        <div className={"flex flex-row flex-wrap justify-center"} id="scales-container" >
            <div id="output">
            <h4>This is the scale you're playing</h4>
                   
            </div>
        </div>
    )
}

export default ScalesContainer;