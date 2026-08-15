"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

import Button from "@/components/base/Button";
import ExpenseForm from "@/components/session/add_expense/ExpenseForm";
import ReceiptUpload from "@/components/session/add_expense/ReceiptUpload";
import ExpenseSummary from "@/components/session/add_expense/ExpenseSummary";
import Header from "@/components/layout/Header";

export default function AddExpensePage() {
    const [receipt, setReceipt] = useState<File | null>(null);

    return (
        <main className="px-6 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 xl:px-10  min-h-screen w-full ">

            <div className=" mx-auto w-full max-w-350 ">


                <header className=" mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <Header heading=" Add Expense" description="Record a company expense and keep your monthly spending
                            accurate." />


                    <Button
                        variant="date"
                        type="button"
                        className="w-fit hidden md:flex m-0 px-3 py-1.5 text-xs"
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
                    <div className="flex w-full flex-col gap-2 md:gap-5 xl:gap-8">

                        <div className="box p-5">
                            <h2 className=" font-iceberg text-2xl mb-4 md:mb-5 xl:mb-7 text-black sm:text-xl xl:text-3xl">
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

                <div className=" mx-auto flex w-full md:max-w-[1400px] items-center justify-end gap-2 ">

                    <Button
                        variant="secondary"
                        type="button"
                        className="w-full md:w-fit h-9 rounded-lg px-4 font-inter text-sm sm:px-5 sm:text-sm">
                        Cancel
                    </Button>

                    <Button
                        variant="primary"
                        type="button"
                        className="w-full md:w-fit h-9 rounded-lg px-4 font-inter text-sm sm:px-5 sm:text-sm">
                        Save Expense
                    </Button>

                </div>

            </div>

        </main>
    );
}