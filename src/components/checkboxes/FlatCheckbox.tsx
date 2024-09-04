'use client';
import {FlatCheckboxProps } from "@/utils/types";
import { useState } from "react";
import Image from 'next/image';

const FlatCheckbox : React.FC<FlatCheckboxProps> = ({ imageUrl  }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
    return (
        <label htmlFor="flat">
            <input type="checkbox" id="flat" 
            checked={isChecked}
            onChange={handleChange}
            />
                 <Image src={imageUrl} height={50} width={50} alt=""/>

        </label>
    );

};

export default FlatCheckbox;