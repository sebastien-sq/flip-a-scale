import { CheckboxContainerProps } from '@/utils/types';
import  FlatCheckbox  from './FlatCheckbox';
import  SharpCheckbox  from './SharpCheckbox';

const CheckboxContainer : React.FC<CheckboxContainerProps> = ({className}) =>{
    const imageFlat = "/assets/flat.png";
    const imageSharp = "/assets/sharp.png";

    return (
        <div className={className}>
            <FlatCheckbox imageUrl={imageFlat} />
            <SharpCheckbox imageUrl={imageSharp} />
        </div>
    );
};

export default CheckboxContainer;