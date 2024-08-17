/* eslint-disable react-hooks/rules-of-hooks */
import { SetStateAction, useState } from "react";

type CheckboxProps = {
  values: string[];
  setValues: (newValues: string[]) => void;
  title: string;
  listOptions: string[];
};

export default function Checkbox({
  values,
  setValues,
  title,
  listOptions,
}: CheckboxProps) {
  if (!listOptions) return null;

  const handleCheckboxChange = (option: string) => {
    if (values.includes(option)) {
      const newValues = values.filter((item) => item !== option);
      setValues(newValues);
    } else {
      const newValues = [...values, option];
      setValues(newValues);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <span>{title}</span>
      {listOptions.map((option, i) => (
        <div
          key={i}
          className="ml-2 cursor-pointer flex gap-2 items-center"
          onClick={(e) => {
            e.preventDefault();
            handleCheckboxChange(option);
          }}
        >
          <input
            type="checkbox"
            value={option}
            checked={values.includes(option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
}
