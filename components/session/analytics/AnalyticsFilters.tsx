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
                className=" grid w-full grid-cols-3 sm:grid-cols-6 gap-2 items-center justify-evenly
                "
            >
                {/* Dropdown Filters */}
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => onFilterChange?.(filter.id)}
                        className=" flex h-10 w-full items-center justify-between gap-2 box px-3 font-iceberg text-xs sm:text-base text-black transition-all hover:border-primary hover:text-primary shadow-lg" >
                        <span className="truncate"> {filter.label}</span>

                        <ChevronDown
                            size={12}
                            className="shrink-0"
                        />
                    </button>
                ))}

                {/* Date */}
                <Button
                    variant="date"
                    type="button"
                    className=" m-0 max-w-40 md:min-w-45 self-end py-2 text-xs md:text-sm " >
                    <CalendarDays
                        size={15}
                        className="text-primary"
                    />

                    Oct 1-Oct 31
                </Button>
              
            </div>
           
        </div>
    );
}