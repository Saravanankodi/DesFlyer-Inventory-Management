"use client";

import { useState } from "react";

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    onChange?: (id: string) => void;
}

export default function Tabs({
    tabs,
    defaultTab,
    onChange,
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(
        defaultTab || tabs[0]?.id
    );

    const handleTab = (id: string) => {
        setActiveTab(id);
        onChange?.(id);
    };

    return (
        <div className="flex items-center gap-6">
            {tabs.map((tab) => {
                const active = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => handleTab(tab.id)}
                        className={`relative pb-2 font-iceberg text-sm sm:text-base md:text-lg  transition
                            ${active
                                ? "text-primary"
                                : "text-black hover:text-primary"
                            }
                        `}
                    >
                        {tab.label}

                        {active && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary" />
                        )}
                    </button>
                );
            })}
        </div>
    );
}