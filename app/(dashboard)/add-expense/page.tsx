"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

import Button from "@/components/base/Button";
import ExpenseForm from "@/components/session/add_expense/ExpenseForm";
import ReceiptUpload from "@/components/session/add_expense/ReceiptUpload";
import ExpenseSummary from "@/components/session/add_expense/ExpenseSummary";

export default function AddExpensePage() {
    const [receipt, setReceipt] = useState<File | null>(null);

    return (
        <main className="min-h-screen w-full bg-[#F8FAFD]">


            <div className=" mx-auto w-full max-w-350 px-3 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">


                <header className=" mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                    <div className="min-w-0">

                        <h1 className=" font-iceberg text-2xl leading-tight text-black sm:text-3xl lg:text-[32px]">
                            Add Expense
                        </h1>

                        <p className=" mt-1 font-inter text-[10px] leading-4 text-secondary sm:text-xs ">
                            Record a company expense and keep your monthly spending
                            accurate.
                        </p>

                    </div>

                    <Button
                        variant="date"
                        type="button"
                        className="w-fit m-0 px-3 py-1.5 text-xs"
                    >
                        <CalendarDays
                            size={13}
                            className="text-primary"
                        />

                        July 2026
                    </Button>

                </header>

                <div className="
                    grid
                    grid-cols-1
                    items-start
                    gap-4
                    lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.95fr)]
                    lg:gap-5
                    xl:gap-6
                ">

                    {/* LEFT */}
                    <ExpenseForm />

                    {/* RIGHT */}
                    <div className="flex w-full flex-col gap-2">

                        <div className="box p-5">
                            <h2 className="font-iceberg text-lg mb-4 text-black sm:text-xl">
                                Receipt / Bill
                            </h2>
                            <ReceiptUpload
                                onFileChange={setReceipt}
                            />
                        </div>

                        <ExpenseSummary />

                    </div>

                </div>

            </div>

            <div className=" sticky bottom-0 z-20 border-t border-border bg-white/95 px-3 py-3 backdrop-blur sm:px-5 lg:px-6">

                <div className=" mx-auto flex w-full max-w-[1400px] items-center justify-end gap-2 ">

                    <Button
                        variant="secondary"
                        type="button"
                        className=" h-9 rounded-lg px-4 font-inter text-[9px] sm:px-5 sm:text-sm">
                        Cancel
                    </Button>

                    <Button
                        variant="primary"
                        type="button"
                        className=" h-9 rounded-lg px-4 font-inter text-[9px] sm:px-5 sm:text-sm">
                        Save Expense
                    </Button>

                </div>

            </div>

        </main>
    );
}