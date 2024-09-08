import { ScalesContainerProps } from "@/utils/types";

const ScalesContainer : React.FC<ScalesContainerProps> = () => {
    
    return (
        <details className="flex flex-col items-center justify-center mt-10 mb-10">
            <summary className="text-2xl font-bold text-center ">Scale</summary>

            <div id="output-scale" className=""></div>
        
        </details>
        
    )
}

export default ScalesContainer;