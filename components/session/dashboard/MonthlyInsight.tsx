"use client";

import {
    Calculator,
    Plus,
    Receipt,
    Sparkles,
} from "lucide-react";

import Tags from "@/components/base/Tags";
import Button from "@/components/base/Button";
import { useRouter } from "next/navigation";
import { Star } from "@/components/icons";

export default function MonthlyInsight() {
    const router = useRouter();
    return (
        <section
            className=" w-full flex overflow-hidden rounded-[20px] border border-border bg-white p-4 sm:p-6 lg:p-7">
           
            {/* Main content */}
            <div className="w-full  flex flex-col sm:flex-row gap-6  items-center justify-between lg:gap-8 " >
                {/* Left */}
                <div className="min-w-0 w-full md:space-y-8 ">

                    {/* Tag */}
                    <Tags
                        words="July Spending"
                        color="text-primary"
                        bg="bg-primary/10"
                    />

                    {/* Total */}
                    <h2
                        className=" mt-3 font-iceberg text-5xl leading-none text-black sm:text-4xl  xl:text-5xl " >
                        ₹84,500
                    </h2>

                    {/* Stats */}
                    <div
                        className=" my-4 flex md:flex-wrap items-center gap-x-5 gap-y-2 " >
                        <div className="flex items-center gap-1.5">
                            <Receipt
                                size={12}
                                strokeWidth={1.8}
                                className="shrink-0 text-secondary"
                            />

                            <span
                                className="font-iceberg text-base text-black sm:text-sm
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
                                className=" font-iceberg text-base text-black sm:text-sm
                                "
                            >
                                ₹2,012 average per expense
                            </span>
                        </div>
                    </div>

                    {/* Add Expense */}
                    <Button
                        type="button"
                        className="font-iceberg w-full"
                        onClick={() => router.push("/add-expense")}>
                        <Plus size={17} />
                        Add Expense
                    </Button>
                </div>

                {/* Right Insight Box */}
                <div
                    className=" hidden md:flex min-h-40 w-full flex-col items-center justify-center rounded-[14px] bg-[#F0F2FF] px-5 py-5 text-center  gap-5  md:px-10 md:py-10"
                >
                   
                    <Star className="w-20 h-auto"/>

                    <p
                        className=" max-w-45 font-iceberg text-sm leading-[1.45] text-black sm:text-sm xl:text-lg
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