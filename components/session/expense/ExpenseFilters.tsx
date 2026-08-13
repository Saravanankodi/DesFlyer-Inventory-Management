"use client";

import { useState } from "react";
import {
    ChevronDown,
    CalendarDays,
    SlidersHorizontal,
    X,
    Download,
    Printer,
} from "lucide-react";

interface ExpenseFiltersProps {
    totalExpenses?: number;
    totalAmount?: string;
}

export default function ExpenseFilters({
    totalExpenses = 42,
    totalAmount = "₹84,500",
}: ExpenseFiltersProps) {
    const [paidFor, setPaidFor] = useState("All");
    const [purpose, setPurpose] = useState("All");

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");

    const [showMoreFilters, setShowMoreFilters] = useState(false);

    const clearFilters = () => {
        setPaidFor("All");
        setPurpose("All");
        setFromDate("");
        setToDate("");
        setMinAmount("");
        setMaxAmount("");
    };

    return (
        <section className="w-fit border-b border-border bg-white">



            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] items-center gap-2 px-3 pt-3 sm:gap-2.5 sm:px-4 lg:px-0 ">

                {/* Paid For */}
                <button
                    type="button"
                    className=" flex h-9 min-w-[118px] items-center justify-between gap-2 rounded-lg border border-border g-white px-3 font-inter text-xs text-black transition hover:border-primary                    "
                >
                    <span>
                        Paid For:{" "}
                        <span className="font-medium">
                            {paidFor}
                        </span>
                    </span>

                    <ChevronDown
                        size={15}
                        className="shrink-0 text-secondary"
                    />
                </button>

                {/* Purpose */}
                <button
                    type="button"
                    className=" flex h-9 min-w-[118px] items-center justify-between gap-2 rounded-lg border border-border g-white px-3 font-inter text-xs text-black transition hover:border-primary                    "
                >
                    <span> Purpose:{" "}
                        <span className="font-medium">
                            {purpose}
                        </span>
                    </span>

                    <ChevronDown
                        size={15}
                        className="shrink-0 text-secondary"
                    />
                </button>

                {/* Date Range */}
                <div
                    className=" flex h-9 min-w-[205px] flex-1 items-center rounded-lg border border-border bg-white px-2.5 sm:flex-none   "
                >
                    <CalendarDays
                        size={15}
                        className="mr-2 shrink-0 text-secondary"
                    />

                    <input
                        type="text"
                        placeholder="From"
                        value={fromDate}
                        onChange={(e) =>
                            setFromDate(e.target.value)
                        }
                        className="  min-w-0  w-full  bg-transparent  font-inter  text-xs  text-black  outline-none  placeholder:text-secondary
                        "
                    />

                    <span className="px-2 text-secondary">
                        →
                    </span>

                    <input
                        type="text"
                        placeholder="To"
                        value={toDate}
                        onChange={(e) =>
                            setToDate(e.target.value)
                        }
                        className=" min-w-0 w-full bg-transparent font-inter text-xs text-black outline-none placeholder:text-secondary
                        "
                    />
                </div>

                {/* Amount Range */}
                <div
                    className=" flex h-9 min-w-[165px] flex-1 items-center rounded-lg border border-border bg-white px-2.5 sm:flex-none                    "
                >
                    <span className="mr-2 text-xs text-secondary">
                        ₹
                    </span>

                    <input
                        type="number"
                        placeholder="Min"
                        value={minAmount}
                        onChange={(e) =>
                            setMinAmount(e.target.value)
                        }
                        className=" min-w-0 w-full bg-transparent font-inter text-xs outline-none placeholder:text-secondary
                        "
                    />

                    <span className="px-2 text-secondary">
                        −
                    </span>

                    <input
                        type="number"
                        placeholder="Max"
                        value={maxAmount}
                        onChange={(e) =>
                            setMaxAmount(e.target.value)
                        }
                        className=" min-w-0 w-full bg-transparent font-inter text-xs outline-none placeholder:text-secondary
                        "
                    />
                </div>

                {/* More Filters */}
                <button
                    type="button"
                    onClick={() =>
                        setShowMoreFilters(!showMoreFilters)
                    }
                    className={`
                        flex
                        h-9
                        items-center
                        gap-2
                        rounded-lg
                        px-2.5

                        font-inter
                        text-xs
                        font-medium

                        transition-colors

                        ${showMoreFilters
                            ? "bg-primary/10 text-primary"
                            : "text-primary hover:bg-primary/10"
                        }
                    `}
                >
                    <SlidersHorizontal size={15} />

                    <span className="hidden xs:inline sm:inline">
                        More Filters
                    </span>
                </button>

            </div>




            <div className="flex flex-wrap items-center gap-2 px-3 py-3 sm:px-4 lg:px-0">

                <FilterTag
                    label="Paid For"
                    value="Client"
                />

                <FilterTag
                    label="Date"
                    value="July 2026"
                />

                <button
                    type="button"
                    onClick={clearFilters}
                    className=" px-1 font-inter text-xs font-medium text-primary hover:underline
                    "
                >
                    Clear All
                </button>

            </div>



            {showMoreFilters && (
                <div
                    className=" grid grid-cols-1 gap-3 border-t border-border px-3 py-3 sm:grid-cols-2 sm:px-4 lg:grid-cols-4 lg:px-0    "
                >
                    <FilterSelect
                        label="Category"
                        value="All Categories"
                    />

                    <FilterSelect
                        label="Status"
                        value="All Status"
                    />

                    <FilterSelect
                        label="Department"
                        value="All Departments"
                    />

                    <FilterSelect
                        label="Payment Method"
                        value="All Methods"
                    />
                </div>
            )}


            <div
                className=" flex min-h-[48px] flex-col justify-center gap-3  px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4 lg:px-0  "
            >

                {/* Summary */}
                <p className="font-inter text-xs text-secondary">
                    Showing{" "}
                    <span className="font-medium text-black">
                        {totalExpenses}
                    </span>{" "}
                    expenses
                    <span className="mx-1.5">|</span>
                    Total Expense:
                    <span className="ml-1 font-medium text-primary">
                        {totalAmount}
                    </span>
                </p>


                {/* Actions */}
                <div className="flex items-center gap-4">

                    <button
                        type="button"
                        aria-label="Download"
                        className=" text-secondary transition-colors hover:text-primary
                        "
                    >
                        <Download size={18} />
                    </button>

                    <button
                        type="button"
                        aria-label="Print"
                        className=" text-secondary transition-colors hover:text-primary
                        "
                    >
                        <Printer size={18} />
                    </button>

                </div>

            </div>

        </section>
    );
}


interface FilterTagProps {
    label: string;
    value: string;
}

function FilterTag({
    label,
    value,
}: FilterTagProps) {
    return (
        <div
            className=" flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-inter text-[11px] text-primary            "
        >
            <span>
                {label}: {value}
            </span>

            <button
                type="button"
                aria-label={`Remove ${label} filter`}
                className="hover:text-primary/70"
            >
                <X size={12} />
            </button>
        </div>
    );
}



interface FilterSelectProps {
    label: string;
    value: string;
}

function FilterSelect({
    label,
    value,
}: FilterSelectProps) {
    return (
        <button
            type="button"
            className=" flex h-9 items-center justify-between rounded-lg border border-border bg-white px-3 font-inter text-xs hover:border-primary            "
        >
            <span>
                <span className="text-secondary">
                    {label}:
                </span>{" "}
                {value}
            </span>

            <ChevronDown
                size={14}
                className="text-secondary"
            />
        </button>
    );
}