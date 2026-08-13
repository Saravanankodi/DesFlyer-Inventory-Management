"use client";
import ExpenseSummary from "@/components/session/expense/ExpenseSummary";
import ExpenseActions from "@/components/session/expense/ExpenseActions";
import ExpenseInformation from "@/components/session/expense/ExpenseInformation";
import SupportingDocuments from "@/components/session/expense/SupportingDocuments";
import Header from "@/components/layout/Header";
import Button from "@/components/base/Button";
import { ArrowLeft, Edit3} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExpenseDetailPage() {
    const router= useRouter();
    return (
        <main className="w-full bg-[#F7F9FC] px-3 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-8 sm:space-y-8">
            <div className="flex  gap-10">
                <button onClick={router.back}><ArrowLeft /></button>
                <Header heading="Transaction Details" description="Complete expense information and supporting documents. "
                    children={<Button variant="secondary"><Edit3 size={18} />Edit Expense</Button>} />
            </div>
            <div className=" w-full ">

                {/* Top Section */}
                <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_285px]">

                    {/* Left */}
                    <div className="space-y-4">

                        <ExpenseSummary />

                        <ExpenseInformation />

                    </div>

                    {/* Right */}
                    <aside className="w-full lg:sticky lg:top-5">

                        <ExpenseActions />

                    </aside>

                </div>

                {/* Documents */}
                <div className="mt-4">

                    <SupportingDocuments />

                </div>

            </div>
            

        </main>
    );
}