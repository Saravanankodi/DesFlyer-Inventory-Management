"use client";

import { useState } from "react";

interface RadiobtnProps {
    variant?: "range" | "view" | "category";
    onChange?: (value: string) => void;
}

export default function Radiobtn({
    variant = "range",
    onChange,
}: RadiobtnProps) {
    const [selected, setSelected] = useState(
        variant === "category"
            ? "client"
            : variant === "view"
                ? "weekly"
                : "monthly"
    );

    const periodTabs = [
        {
            id: "monthly",
            label: "Monthly",
        },
        {
            id: "weekly",
            label: "Weekly",
        },
        {
            id: "yearly",
            label: "Yearly",
        },
    ];

    const frequencyTabs = [
        {
            id: "weekly",
            label: "Weekly",
        },
        {
            id: "daily",
            label: "Daily",
        },
    ];

    const categoryTabs = [
        {
            id: "client",
            label: "Client",
        },
        {
            id: "employee",
            label: "Employee",
        },
        {
            id: "company",
            label: "Company / Office",
        },
        {
            id: "other",
            label: "Other",
        },
    ];

    const tabs =
        variant === "category"
            ? categoryTabs
            : variant === "view"
                ? frequencyTabs
                : periodTabs;

    const handleChange = (id: string) => {
        setSelected(id);
        onChange?.(id);
    };

    /* Category variant */
    if (variant === "category") {
        return (
            <div className="flex flex-wrap items-center gap-2">
                {tabs.map((tab) => {
                    const active = selected === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => handleChange(tab.id)}
                            className={` rounded-lg border px-4 py-2 font-inter text-sm transition-all
                                 ${active
                                    ? "border-primary bg-primary text-white"
                                    : "border-border bg-white text-black hover:border-primary hover:text-primary"
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        );
    }

    /* Range + View variants */
    return (
        <div className="flex w-fit items-center rounded-xl border border-border bg-[#F1F3FF] p-1">
            {tabs.map((tab) => {
                const active = selected === tab.id;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => handleChange(tab.id)}
                        className={` rounded-lg px-3 py-1.5 font-inter text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm 
                            ${active
                                ? "bg-white text-primary shadow-sm"
                                : "text-secondary hover:text-primary"
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}