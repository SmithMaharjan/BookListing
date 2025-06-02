import clsx from "clsx";
import React from "react";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  type: string;
  name: string;
  size: "sm" | "md" | "lg";
};

const Input = ({ handleChange, value, type, name, size }: Props) => {
  const baseSize = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-10 py-3",
  };
  const inputSize = baseSize[size];
  return (
    <>
      <label className=" font-bold text-gray-200">{name}:</label>
      <input
        className={clsx("border-2 border-white  ml-3 text-white ", inputSize)}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        placeholder={name}
        required
      />
    </>
  );
};

export default Input;
