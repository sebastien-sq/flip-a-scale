"use client";
import { SharpCheckboxProps } from "@/utils/types";
import Image from "next/image";
import styles from './Checkboxes.module.css';

const SharpCheckbox: React.FC<SharpCheckboxProps> = ({
  imageUrl,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor="sharp" className={styles.checkboxLabel}>
      <input
        type="checkbox"
        id="sharp"
        name="sharp"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.hiddenCheckbox}
      />
      <Image src={imageUrl} height={70} width={70} alt="sharp" className={styles.checkboxImage} />
    </label>
  );
};

export default SharpCheckbox;
