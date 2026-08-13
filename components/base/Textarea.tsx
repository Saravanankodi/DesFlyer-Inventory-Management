"use client";

import React from "react";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Textarea = ({
    label,
    error,
    helperText,
    className = "",
    ...props
}: TextareaProps) => {
    return (
        <div className="w-full">

            {label && (
                <label className="mb-1.5 block font-inter text-xs text-secondary">
                    {label}
                </label>
            )}

            <textarea
                {...props}
                className={` min-h-[90px] w-full resize-none rounded-[20px] border border-border bg-white px-4 py-3 font-inter text-sm text-black outline-none transition-all placeholder:text-secondary/70 focus:border-primary 
                    ${error ? "border-red-500" : ""}
                    ${className}
                `}
            />

            {helperText && !error && (
                <p className="mt-1 text-sm text-secondary">
                    {helperText}
                </p>
            )}

            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}

        </div>
    );
};

export default Textarea;