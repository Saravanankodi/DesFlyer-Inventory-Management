"use client";

import { ChevronDown, IndianRupee } from "lucide-react";

import Input from "@/components/base/Input";
import Tags from "@/components/base/Tags";
import Radiobtn from "@/components/base/Radiobtn";
import Textarea from "@/components/base/Textarea";

interface ExpenseFormProps {
    onCategoryChange?: (value: string) => void;
}

export default function ExpenseForm({
    onCategoryChange,
}: ExpenseFormProps) {
    return (
        <section className="w-full rounded-[18px] border border-border bg-white p-4 sm:p-5 lg:p-6">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between gap-3">

                <h2 className="font-iceberg text-lg text-black sm:text-xl">
                    Expense Details
                </h2>

                <Tags color="text-primary" bg="bg-primary/10" words="Required Information" />

            </div>

            <div className="space-y-4">

                {/* Amount */}
                <Input
                    label="Amount"
                    type="number"
                    placeholder="1200"
                    icon={<IndianRupee size={20} strokeWidth={4} />}
                    className=" h-10 rounded-lg text-sm lg:text-2xl sm:h-11 font-inter font-bold"  />

                {/* Category */}
                <div>

                    <p className="mb-1.5 block font-inter text-xs text-secondary">
                        Who is this expense for?
                    </p>

                    <Radiobtn
                        variant="category"
                        onChange={onCategoryChange}
                    />

                </div>

                {/* Name / Description */}
                <Input
                    label="Enter Name / Description"
                    type="text"
                    placeholder="e.g. Project 'Z' lunch"
                    className=" h-10 rounded-lg text-xs sm:h-11
                    " />

                {/* Expense Purpose + Date */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <Input
                        label="What was this expense for?"
                        type="text"
                        placeholder="Petrol / Travel"
                        className=" h-10 rounded-lg text-xs sm:h-11" />

                    <Input
                        label="Expense Date"
                        type="date"
                        defaultValue="2026-07-28"
                        className=" h-10 rounded-lg text-xs sm:h-11
                        "
                    />

                </div>

                {/* Purpose */}
                <Textarea
                    label="Purpose"
                    placeholder="Brief description of the expense..."
                    rows={3}
                />

                {/* Paid For + Department */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <Input
                        label="Paid For"
                        type="text"
                        placeholder="ABC Technologies"
                        className=" h-10 rounded-lg text-xs sm:h-11
                        "
                    />

                    <Input
                        label="Department"
                        type="text"
                        placeholder="Development"
                        className=" h-10 rounded-lg text-xs sm:h-11
                        "
                    />

                </div>

                {/* Payment Method */}
                <div>

                    <label className="mb-1.5 block font-inter text-xs text-secondary">
                        Payment Method
                    </label>

                    <div className="relative">

                        <select
                            defaultValue="Bank Transfer"
                            className=" h-10 w-full appearance-none rounded-lg border border-border bg-white px-3 pr-9 font-inter text-xs text-black outline-none transition focus:border-primary sm:h-11
                            "
                        >
                            <option value="Bank Transfer">
                                Bank Transfer
                            </option>

                            <option value="Cash">
                                Cash
                            </option>

                            <option value="Credit Card">
                                Credit Card
                            </option>

                            <option value="Debit Card">
                                Debit Card
                            </option>

                            <option value="UPI">
                                UPI
                            </option>
                        </select>

                        <ChevronDown
                            size={14}
                            className=" pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}