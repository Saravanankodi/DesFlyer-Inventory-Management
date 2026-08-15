"use client";

import React from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: React.ReactNode;
}

const Input = ({
    label,
    error,
    helperText,
    className = "",
    icon,
    ...props
}: InputProps) => {
    return (
        <div className="w-full">
            {/* Label */}
            {label && (
                <label className="mb-1.5 md:mb-2 xl:mb-4 block font-inter text-sm md:text-sm xl:text-base text-secondary">
                    {label}
                </label>
            )}

            {/* Input Wrapper */}
            <div
                className={` flex w-full items-center gap-3 rounded-[20px] border bg-white px-4 h-11 text-black transition-all duration-200

                    ${error
                        ? "border-red-500 focus-within:border-red-500"
                        : "border-border focus-within:border-primary"
                    }
                `}
            >
                {/* Icon */}
                {icon && (
                    <div className="flex shrink-0 items-center justify-center text-primary">
                        {icon}
                    </div>
                )}

                {/* Input */}
                <input
                    {...props}
                    className={` min-w-0 flex-1 bg-transparent font-inter   text-black outline-none placeholder:text-black disabled:cursor-not-allowed disabled:opacity-50
                        ${className}
                    `}
                />
            </div>

            {/* Helper Text */}
            {helperText && !error && (
                <p className="mt-1 font-inter text-xs text-secondary">
                    {helperText}
                </p>
            )}

            {/* Error */}
            {error && (
                <p className="mt-1 font-inter text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;