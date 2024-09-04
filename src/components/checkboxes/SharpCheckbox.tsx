'use client';
import {SharpCheckboxProps } from "@/utils/types";
import { useState } from "react";
import Image from 'next/image';

const SharpCheckbox : React.FC<SharpCheckboxProps> = ({ imageUrl  }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
    return (
        <label htmlFor="sharp">
            <input type="checkbox" id="sharp" 
            checked={isChecked}
            onChange={handleChange}
            />
            <Image src={imageUrl} height={50} width={50} alt=""/>
        </label>
    );

};

export default SharpCheckbox;