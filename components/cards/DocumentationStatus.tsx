"use client";

import {
    CheckCircle2,
    TriangleAlert,
    CircleMinus,
} from "lucide-react";

interface DocumentationStatusProps {
    billsAttached?: number;
    billsMissing?: number;
    toReview?: number;
}

export default function DocumentationStatus({
    billsAttached = 32,
    billsMissing = 6,
    toReview = 4,
}: DocumentationStatusProps) {
    return (
        <section className="w-full rounded-[20px] border border-border bg-white p-5 sm:p-6">

            {/* Title */}
            <h2 className="font-iceberg text-base text-black sm:text-xl">
                Documentation Status
            </h2>

            {/* Status Cards */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

                {/* Bills Attached */}
                <div className="flex items-center gap-3 rounded-lg bg-[#EEF1FF] px-4 py-3">
                    <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-600"
                    />

                    <div>
                        <p className="font-iceberg text-sm text-black">
                            {billsAttached} Bills Attached
                        </p>

                        <p className="font-inter text-[10px] text-secondary">
                            Verified documentation
                        </p>
                    </div>
                </div>

                {/* Bills Missing */}
                <div className="flex items-center gap-3 rounded-lg bg-[#FFF1F1] px-4 py-3">
                    <TriangleAlert
                        size={18}
                        className="shrink-0 text-red-500"
                    />

                    <div>
                        <p className="font-iceberg text-sm text-red-500">
                            {billsMissing} Bills Missing
                        </p>

                        <p className="font-inter text-[10px] text-secondary">
                            Action required
                        </p>
                    </div>
                </div>

                {/* To Review */}
                <div className="flex items-center gap-3 rounded-lg bg-[#EEF1FF] px-4 py-3">
                    <CircleMinus
                        size={18}
                        className="shrink-0 text-orange-500"
                    />

                    <div>
                        <p className="font-iceberg text-sm text-black">
                            {toReview} To Review
                        </p>

                        <p className="font-inter text-[10px] text-secondary">
                            Pending verification
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}