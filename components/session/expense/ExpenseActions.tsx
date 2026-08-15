"use client";

import {
    CheckCheck,
    Download,
    Edit3,
    Printer,
    Trash2,
} from "lucide-react";

import Button from "@/components/base/Button";

export default function ExpenseActions() {
    return (
        <section className="w-full rounded-[20px] border border-border bg-white p-5 shadow-sm sm:p-6 lg:p-7">

            <p className="font-inter text-sm uppercase tracking-[0.18em] text-black">
                Actions
            </p>

            <div className="mt-5 space-y-2">

                {/* Edit */}
                <button                    
                    type="button"
                    className="flex h-9 w-full items-center gap-3 rounded-lg border border-border bg-white px-3 font-inter text-base sm:text-base text-black transition hover:bg-btn-blue hover:text-white"
                >
                    <Edit3 size={15} />
                    Edit Expense
                </button>

                {/* Download */}
                <button
                    type="button"
                    className="flex h-9 w-full items-center gap-3 rounded-lg border border-border bg-white px-3 font-inter text-base sm:text-base text-black transition hover:bg-btn-blue hover:text-white"
                >
                    <Download size={15} />
                    Download PDF
                </button>

                {/* Print */}
                <button
                    type="button"
                    className="flex h-9 w-full items-center gap-3 rounded-lg border border-border bg-white px-3 font-inter text-base sm:text-base text-black transition hover:bg-btn-blue hover:text-white"
                >
                    <Printer size={15} />
                    Print
                </button>

                {/* Mark Reviewed */}
                <button
                    type="button"
                    className="flex h-9 w-full items-center gap-3 rounded-lg border border-border bg-white px-3 font-inter text-base sm:text-base text-[#16A34A] transition hover:border-[#16A34A] hover:bg-[#16A34A]/10 "
                >
                    <CheckCheck size={15} />
                    Mark as Reviewed
                </button>

            </div>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-border" />

            {/* Delete */}
            <button
                type="button"
                className="flex h-9 w-full items-center justify-between rounded-lg border border-red-200 px-3 font-inter text-base sm:text-base text-red-500 transition hover:bg-red-50"
            >
                <span className="flex items-center gap-3">
                    <Trash2 size={15} />
                    Delete Expense
                </span>

                <span className="text-[10px] uppercase">
                    Admin
                </span>
            </button>

        </section>
    );
}