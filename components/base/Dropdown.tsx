"use client";

import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  name: string;
  option: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({
  name,
  option,
  value,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setOpen(false);
  };

  const selectedOption = option.find((o) => o.value === value);

  return (
    <div className="relative w-full">
      <label className="subtitle block mb-2">
        {name}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className=" w-full h-11 px-4 text-left rounded-[20px] border border-border bg-white text-black placeholder:text-secondary focus:border-primary transition "
      >
        {selectedOption ? selectedOption.label : "Select"}
      </button>

      {open && (
        <ul
          className=" absolute z-10 mt-2 w-full rounded-[20px] border border-border bg-white shadow-md "
        >
          {option.map((item) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item)}
              className=" cursor-pointer px-4 py-3 hover:bg-gray-100 "
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;