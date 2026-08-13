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
        <section className="w-full rounded-[20px] border border-border bg-white p-5 shadow-sm sm:p-6 lg:p-7">

            {/* Top */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div>
                    <p className="font-inter text-[9px] uppercase tracking-[0.18em] text-secondary sm:text-[10px]">
                        Transaction ID
                    </p>

                    <h1 className="mt-1 font-iceberg text-xl text-black sm:text-2xl">
                        {transactionId}
                    </h1>
                </div>

                {/* Status */}
                <div className="flex flex-col items-start gap-1 sm:items-end">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E7F6ED] px-3 py-1 font-inter text-[9px] text-[#16A34A]">
                        <BadgeCheck size={12} />
                        Verified
                    </span>

                    <span className="font-inter text-[9px] text-secondary">
                        {date}
                    </span>

                </div>

            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-border" />

            {/* Details */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">

                <div>
                    <p className="font-inter text-[9px] text-secondary">
                        Amount
                    </p>

                    <p className="mt-1 font-iceberg text-lg text-black sm:text-xl">
                        {amount}
                    </p>
                </div>

                <div>
                    <p className="font-inter text-[9px] text-secondary">
                        Payment Method
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                        <Building2
                            size={18}
                            className="text-primary"
                        />

                        <p className="font-iceberg text-sm text-black sm:text-base">
                            {paymentMethod}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="font-inter text-[9px] text-secondary">
                        Created By
                    </p>

                    <p className="mt-1 font-iceberg text-sm text-black sm:text-base">
                        {createdBy}
                    </p>
                </div>

            </div>

        </section>
    );
}