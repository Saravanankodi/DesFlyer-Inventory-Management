import { Bank } from "@/components/icons";
import {
    BadgeCheck,
    Building2,
} from "lucide-react";

interface ExpenseSummaryProps {
    transactionId?: string;
    date?: string;
    amount?: string;
    paymentMethod?: string;
    createdBy?: string;
}

export default function ExpenseSummary({
    transactionId = "EXP-2026-0042",
    date = "28 Jul 2026",
    amount = "₹8,500.00",
    paymentMethod = "Bank Transfer",
    createdBy = "Akash Sharma",
}: ExpenseSummaryProps) {
    return (
        <section className="w-full box p-5 shadow-sm sm:p-6 lg:p-7">

            {/* Top */}
            <div className="flex  gap-5 items-start justify-between">

                <div>
                    <p className="font-inter text-xs uppercase tracking-[0.18em] text-secondary sm:text-sm">
                        Transaction ID
                    </p>

                    <h1 className="mt-1 font-iceberg text-2xl text-black sm:text-4xl">
                        {transactionId}
                    </h1>
                </div>

                {/* Status */}
                <div className="flex flex-col items-center gap-1 sm:items-end">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E7F6ED] px-3 py-1 font-inter text-xs text-[#16A34A] font-bold ">
                        <BadgeCheck size={15} />
                        Verified
                    </span>

                    <span className="font-inter text-xs text-secondary">
                        {date}
                    </span>

                </div>

            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-border" />

            {/* Details */}
            <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 sm:flex-row items-start justify-evenly sm:gap-6">

                <div>
                    <p className="font-inter text-sm text-secondary">
                        Amount
                    </p>

                    <p className="mt-1 font-iceberg text-xl text-black sm:text-xl">
                        {amount}
                    </p>
                </div>

                <div>
                    <p className="font-inter text-sm text-secondary">
                        Payment Method
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                        <Bank
                            className="text-primary"
                        />

                        <p className="font-iceberg text-base text-black sm:text-base">
                            {paymentMethod}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="font-inter text-sm text-secondary">
                        Created By
                    </p>

                    <p className="mt-1 font-iceberg text-base text-black sm:text-base">
                        {createdBy}
                    </p>
                </div>

            </div>
            </div>

        </section>
    );
}