'use client';
import {FlatCheckboxProps } from "@/utils/types";
import Image from 'next/image';
import styles from './Checkboxes.module.css';

const FlatCheckbox : React.FC<FlatCheckboxProps> = ({ imageUrl, checked, onChange }) => {
    
    return (
        <label htmlFor="flat" className={styles.checkboxLabel}>
            <input type="checkbox" id="flat" 
            name="flat"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={styles.hiddenCheckbox}
            />
                 <Image src={imageUrl} height={70} width={70} alt="flat" className={styles.checkboxImage}/>

        </label>
    );

};

export default FlatCheckbox;