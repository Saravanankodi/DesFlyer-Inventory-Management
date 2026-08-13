"use client";

import {
    Calculator,
    Plus,
    Receipt,
    Sparkles,
} from "lucide-react";

import Tags from "@/components/base/Tags";

export default function MonthlyInsight() {
    return (
        <section
            className=" w-full flex overflow-hidden rounded-[20px] border border-border bg-white p-5 sm:p-6 lg:p-7">
           
            {/* Main content */}
            <div className=" grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1fr)_1fr] sm:items-center  lg:grid-cols-[minmax(0,1fr)_1fr] lg:gap-8 " >
                {/* Left */}
                <div className="min-w-0 w-full md:space-y-8">

                    {/* Tag */}
                    <Tags
                        words="July Spending"
                        color="text-primary"
                        bg="bg-primary/10"
                    />

                    {/* Total */}
                    <h2
                        className=" mt-3 font-iceberg text-[32px] leading-none text-black sm:text-[36px]  xl:text-5xl " >
                        ₹84,500
                    </h2>

                    {/* Stats */}
                    <div
                        className=" mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 " >
                        <div className="flex items-center gap-1.5">
                            <Receipt
                                size={12}
                                strokeWidth={1.8}
                                className="shrink-0 text-secondary"
                            />

                            <span
                                className="font-iceberg text-sm text-black sm:text-sm
                                "
                            >
                                42 expenses
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <Calculator
                                size={12}
                                strokeWidth={1.8}
                                className="shrink-0 text-secondary"
                            />

                            <span
                                className=" font-iceberg text-sm text-black sm:text-sm
                                "
                            >
                                ₹2,012 average per expense
                            </span>
                        </div>
                    </div>

                    {/* Add Expense */}
                    <button
                        type="button"
                        className=" mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-[9px] bg-btn-blue px-5 font-iceberg text-sm text-white shadow-sm transition hover:opacity-90 sm:h-12 sm:px-6
                        "
                    >
                        <Plus size={17} />
                        Add Expense
                    </button>
                </div>

                {/* Right Insight Box */}
                <div
                    className=" flex min-h-[145px] w-full flex-col items-center justify-center rounded-[14px] bg-[#F0F2FF] px-5 py-5 text-center  gap-5
                    "
                >
                    <Sparkles
                        size={50}
                        strokeWidth={1.7}
                        className="mb-3 text-[#8CB3EE]"
                    />

                    <p
                        className=" max-w-[180px] font-iceberg text-[10px] leading-[1.45] text-black sm:text-sm xl:text-lg
                        "
                    >
                        Monthly Insight: You've recorded 42
                        expenses across 8 clients, 6 employees
                        and company operations.
                    </p>
                </div>
            </div>
        </section>
    );
}