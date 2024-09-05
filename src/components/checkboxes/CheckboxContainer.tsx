'use client';
import { CheckboxContainerProps } from '@/utils/types';
import  FlatCheckbox  from './FlatCheckbox';
import  SharpCheckbox  from './SharpCheckbox';
import { useState } from 'react';

const CheckboxContainer : React.FC<CheckboxContainerProps> = ({className, onAccidentalChange}) =>{
    const [useFlats, setUseFlats] = useState(false);
    const [useSharps, setUseSharps] = useState(false);
    const imageFlat = "/assets/flat.png";
    const imageSharp = "/assets/sharp.png";

    const handleFlatChange = (checked: boolean) => {
        setUseFlats(checked);
        onAccidentalChange({useFlats: checked, useSharps});
    };

    const handleSharpChange = (checked: boolean) => {
        setUseSharps(checked);
        onAccidentalChange({useFlats, useSharps : checked});
    };


    return (
        <div className={className}>
            <FlatCheckbox imageUrl={imageFlat} checked={useFlats} onChange={handleFlatChange} />
            <SharpCheckbox imageUrl={imageSharp} checked={useSharps} onChange={handleSharpChange} />
        </div>
    );
};

export default CheckboxContainer;