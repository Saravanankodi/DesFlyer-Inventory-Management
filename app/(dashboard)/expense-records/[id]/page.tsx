"use client";
import ExpenseSummary from "@/components/session/expense/ExpenseSummary";
import ExpenseActions from "@/components/session/expense/ExpenseActions";
import ExpenseInformation from "@/components/session/expense/ExpenseInformation";
import SupportingDocuments from "@/components/session/expense/SupportingDocuments";
import Header from "@/components/layout/Header";
import Button from "@/components/base/Button";
import { ArrowLeft, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExpenseDetailPage() {
    const router = useRouter();
    return (
        <main className="px-3 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 xl:px-10  w-full  psm:space-y-8">
            <div className="w-full flex md:mb-4  gap-4 sm:gap-10">
                <button className="hidden sm:block" onClick={router.back}><ArrowLeft /></button>
                <Header heading="Transaction Details" description="Complete expense information and supporting documents. "/>
                <Button variant="primary" className="min-w-40 h-fit  hidden md:flex sm:w-fit"><Edit3 size={18} />
                    Edit Expense </Button> 
            </div>
            <Button variant="primary" className="w-full my-4 md:hidden ">
                <Edit3 size={18} />
                Edit Expense
            </Button>
            <div className=" w-full ">

                {/* Top Section */}
                <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_285px]">

                    {/* Left */}
                    <div className="space-y-4">

                        <ExpenseSummary />

                        <ExpenseInformation />

                    </div>

                    {/* Right */}
                    <aside className="w-full lg:sticky lg:top-5 hidden md:block">

                        <ExpenseActions />

                    </aside>

                </div>

                {/* Documents */}
                <div className="mt-4 hidden md:block">

                    <SupportingDocuments />

                </div>
                <div className="mt-4 space-y-7 md:hidden">
                    <SupportingDocuments />
                    <ExpenseActions />
                </div>

            </div>


        </main>
    );
}