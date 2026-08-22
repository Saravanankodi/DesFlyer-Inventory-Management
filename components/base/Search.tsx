"use client";

import React from "react";
import { SearchIcon } from "lucide-react";

interface SearchProps {
    placeholder?: string;
    className?: string;
}

export default function Search({
    placeholder = "Search...",
    className = "",
}: SearchProps) {
    return (
        <div
            className={` w-full h-10 flex items-center gap-3 px-4 box bg-[#F1F3FF]
        ${className}
      `}
        >
            <SearchIcon className="text-secondary" />

            <input
                type="text"
                placeholder={placeholder}
                className=" w-full bg-transparent outline-none text-sm text-black placeholder:text-secondary"
            />
        </div>
    );
}