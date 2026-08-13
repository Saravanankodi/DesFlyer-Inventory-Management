"use client";

import { CalendarDays, ChevronDown } from "lucide-react";
import Button from "@/components/base/Button";

interface AnalyticsFiltersProps {
    onFilterChange?: (filter: string) => void;
}

const filters = [
    {
        id: "department",
        label: "All Departments",
    },
    {
        id: "employee",
        label: "All Employees",
    },
    {
        id: "client",
        label: "All Clients",
    },
    {
        id: "category",
        label: "Category: All",
    },
    {
        id: "status",
        label: "Status: Approved",
    },
];

export default function AnalyticsFilters({
    onFilterChange,
}: AnalyticsFiltersProps) {
    return (
        <div className="w-full flex items-center justify-center">
            <div
                className=" grid w-[100%] grid-cols-3 sm:grid-cols-5 gap-2 items-center justify-evenly
                "
            >
                {/* Dropdown Filters */}
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => onFilterChange?.(filter.id)}
                        className=" flex h-8 w-full items-center justify-between gap-2 rounded-lg border border-border bg-white px-3 font-inter text-[10px] sm:text-sm text-secondary transition-all hover:border-primary hover:text-primary " >
                        <span className="truncate"> {filter.label}</span>

                        <ChevronDown
                            size={12}
                            className="shrink-0"
                        />
                    </button>
                ))}

                {/* Date */}
              
            </div>
           
        </div>
    );
}