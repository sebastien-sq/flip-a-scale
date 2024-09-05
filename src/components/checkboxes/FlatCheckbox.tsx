'use client';
import {FlatCheckboxProps } from "@/utils/types";
import Image from 'next/image';

const FlatCheckbox : React.FC<FlatCheckboxProps> = ({ imageUrl, checked, onChange }) => {
    
    return (
        <label htmlFor="flat">
            <input type="checkbox" id="flat" 
            name="flat"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            />
                 <Image src={imageUrl} height={50} width={50} alt="flat"/>

        </label>
    );

};

export default FlatCheckbox;