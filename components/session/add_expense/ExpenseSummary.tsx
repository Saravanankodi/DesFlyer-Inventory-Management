"use client";

import {
    FileText,
    Image as ImageIcon,
} from "lucide-react";

interface SummaryRowProps {
    label: string;
    value: string;
}

interface ExpenseSummaryProps {
    vendor?: string;
    category?: string;
    date?: string;
    amount?: string;
}

function SummaryRow({
    label,
    value,
}: SummaryRowProps) {
    return (
        <div className="flex items-center justify-between gap-4">

            <span className="font-iceberg text-xs text-secondary sm:text-lg">
                {label}
            </span>

            <span className="max-w-[60%] text-right font-iceberg text-xs font-medium text-black sm:text-lg">
                {value}
            </span>

        </div>
    );
}

export default function ExpenseSummary({
    vendor = "ABC Technologies",
    category = "Petrol / Fuel",
    date = "28/07/2026",
    amount = "₹ 0.00",
}: ExpenseSummaryProps) {
    return (
        <section className="w-full rounded-[18px] border border-border bg-white p-4 sm:p-5 lg:p-6">

            {/* Header */}
            <h2 className="font-iceberg text-lg text-black sm:text-xl">
                Expense Summary
            </h2>

            {/* Preview Card */}
            <div className="mt-4 rounded-xl border border-border bg-white p-3.5 sm:p-4">

                {/* Preview Header */}
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3">

                    <div className="flex min-w-0 items-center gap-2">

                        <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-white text-primary
                        ">
                            <FileText size={18} />
                        </span>

                        <span className=" truncate font-inter text-[10px] font-semibold uppercase text-black sm:text-sm
                        ">
                            Receipt Preview
                        </span>

                    </div>

                    <span className="shrink-0 font-inter text-[8px] text-secondary sm:text-[11px]">
                        #DF-3121-2026
                    </span>

                </div>

                {/* Details */}
                <div className="mt-3 space-y-2.5 md:space-y-3">

                    <SummaryRow
                        label="Vendor/Client"
                        value={vendor}
                    />

                    <SummaryRow
                        label="Category"
                        value={category}
                    />

                    <SummaryRow
                        label="Date"
                        value={date}
                    />

                </div>

                {/* Total */}
                <div className=" mt-3 flex items-center justify-between border-t border-dashed border-border pt-3
                ">

                    <span className=" font-inter text-[8px] sm:text-sm font-semibold uppercase text-black
                    ">
                        Total Amount
                    </span>

                    <span className="font-iceberg text-base text-primary sm:text-2xl">
                        {amount}
                    </span>

                </div>

                {/* Image Preview */}
                <div className=" mt-2 flex h-20 items-center justify-center rounded-lg bg-[#F0F3FF] sm:h-24
                ">

                    <div className="flex flex-col items-center gap-1 text-secondary">

                        <ImageIcon
                            size={18}
                            strokeWidth={2}
                        />

                        <span className=" font-iceberg text-[6px] uppercase sm:text-[10px]
                        ">
                            No Preview Attached
                        </span>

                    </div>

                </div>

            </div>

            {/* Description */}
            <p className=" mx-auto mt-3 px-10 text-center font-inter text-[7px] text-secondary sm:text-sm
            ">
                This is a digital generated preview based on your
                current inputs.
            </p>

        </section>
    );
}