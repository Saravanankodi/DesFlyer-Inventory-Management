"use client";

import React from "react";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "date";
    children: React.ReactNode;
}

const Button = ({
    variant = "primary",
    children,
    className = "",
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-btn-blue text-white",
        secondary: "bg-primary text-white",

        date: "border border-border bg-white text-black hover:border-primary hover:text-primary",
    };

    return (
        <button
            {...props}
            className={` w-fit m-2 flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;