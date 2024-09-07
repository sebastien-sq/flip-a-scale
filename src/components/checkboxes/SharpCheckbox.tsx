"use client";
import { SharpCheckboxProps } from "@/utils/types";
import Image from "next/image";

const SharpCheckbox: React.FC<SharpCheckboxProps> = ({
  imageUrl,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor="sharp">
      <input
        type="checkbox"
        id="sharp"
        name="sharp"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Image src={imageUrl} height={50} width={50} alt="sharp" />
    </label>
  );
};

export default SharpCheckbox;
