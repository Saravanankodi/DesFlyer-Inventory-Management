"use client";
import Tags from "@/components/base/Tags";

interface LevelbarProps {
    variant:
    | "recipient"
    | "category"
    | "budget"
    | "breakdown"
    | "spending";
}

export default function Levelbar({ variant }: LevelbarProps) {

    /* =========================
       RECIPIENT
    ========================= */

    if (variant === "recipient") {
        const data = [
            {
                label: "Clients",
                amount: "₹35,500",
                percentage: "42%",
                value: 42,
            },
            {
                label: "Employees",
                amount: "₹24,000",
                percentage: "28%",
                value: 28,
            },
            {
                label: "Company / Office",
                amount: "₹15,000",
                percentage: "18%",
                value: 18,
            },
            {
                label: "Other",
                amount: "₹10,000",
                percentage: "12%",
                value: 12,
            },
        ];

        return (
            <div className="box w-full p-4 sm:p-5 lg:p-6">

                <h2 className="font-iceberg text-base text-black sm:text-xl">
                    Who are we spending for?
                </h2>

                <button
                    type="button"
                    className="mt-1.5 font-iceberg text-[11px] text-primary hover:opacity-80 sm:mt-2 sm:text-sm"
                >
                    View Breakdown
                </button>

                <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                    {data.map((item) => (
                        <div key={item.label} className="w-full">

                            <div className="mb-1 flex items-center justify-between gap-2 font-iceberg text-[11px] sm:text-sm">
                                <span className="min-w-0 truncate">
                                    {item.label}
                                </span>

                                <span className="shrink-0">
                                    {item.amount} ({item.percentage})
                                </span>
                            </div>

                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8ECFA] sm:h-2">
                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-300"
                                    style={{
                                        width: `${item.value}%`,
                                    }}
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        );
    }


    /* =========================
       SPENDING
    ========================= */

    if (variant === "spending") {
        const data = [
            {
                label: "Clients (Project Expenses)",
                amount: "₹5,40,000",
                value: 75,
            },
            {
                label: "Employees",
                amount: "₹3,20,000",
                value: 55,
            },
            {
                label: "Office Operations",
                amount: "₹2,80,000",
                value: 45,
            },
            {
                label: "Others",
                amount: "₹1,05,200",
                value: 25,
            },
        ];

        return (
            <div className="box w-full p-4 sm:p-5 lg:p-6">

                <h2 className="font-iceberg text-base text-black sm:text-2xl mb-10">
                    Spending By Recipient
                </h2>

                <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-10">
                    {data.map((item) => (
                        <div key={item.label} className="w-full">

                            {/* Label + Amount */}
                            <div className="mb-1 flex items-center justify-between gap-2 font-iceberg text-[11px] sm:text-xs">

                                <span className="min-w-0 truncate">
                                    {item.label}
                                </span>

                                <span className="shrink-0">
                                    {item.amount}
                                </span>

                            </div>

                            {/* Progress */}
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8ECFA] sm:h-3">

                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-300"
                                    style={{
                                        width: `${item.value}%`,
                                    }}
                                />

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        );
    }


    /* =========================
       CATEGORY
    ========================= */

    if (variant === "category") {
        const data = [
            {
                label: "Hardware",
                amount: "₹25,000",
                value: 30,
            },
            {
                label: "Petrol / Travel",
                amount: "₹12,500",
                value: 15,
            },
            {
                label: "Food / Meeting",
                amount: "₹8,500",
                value: 10,
            },
            {
                label: "Internet / Sub",
                amount: "₹7,500",
                value: 9,
            },
            {
                label: "Software / Cloud",
                amount: "₹5,000",
                value: 6,
            },
            {
                label: "Other",
                amount: "₹26,000",
                value: 30,
            },
        ];

        return (
            <div className="box w-full p-4 sm:p-5 lg:p-6">

                <h2 className="font-iceberg text-base text-black sm:text-xl">
                    What are we spending on?
                </h2>

                <button
                    type="button"
                    className="mt-1.5 font-iceberg text-[11px] text-primary hover:opacity-80 sm:mt-2 sm:text-sm"
                >
                    View All Categories
                </button>

                <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                    {data.map((item) => (
                        <div
                            key={item.label}
                            className="flex w-full items-center gap-2 sm:gap-3"
                        >

                            <span className="w-20 shrink-0 truncate font-iceberg text-[11px] sm:w-[105px] sm:text-sm">
                                {item.label}
                            </span>

                            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#E8ECFA] sm:h-2">
                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-300"
                                    style={{
                                        width: `${item.value}%`,
                                    }}
                                />
                            </div>

                            <span className="w-14 shrink-0 text-right font-iceberg text-[11px] sm:w-[55px] sm:text-sm">
                                {item.amount}
                            </span>

                        </div>
                    ))}
                </div>

            </div>
        );
    }


    /* =========================
       BUDGET
    ========================= */

    if (variant === "budget") {
        return (
            <div className="box w-full p-4 sm:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-iceberg text-base text-black sm:text-xl">
                        Monthly Budget Utilization
                    </h2>
                    <Tags color="text-red-800" bg="bg-red-100" words="Over Budget" />
                </div>
                <div className="flex flex-col gap-1.5 font-iceberg text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-sm">

                    <span>
                        Actual Spending: <b>₹12,45,200</b>
                    </span>

                    <span>
                        Budget: ₹10,00,000
                    </span>

                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#E8ECFA] sm:mt-4 sm:h-2.5">

                    <div
                        className="h-full rounded-full bg-red-500"
                        style={{
                            width: "100%",
                        }}
                    />

                </div>

                <p className="mt-1.5 font-iceberg text-[11px] text-secondary sm:mt-2 sm:text-xs">
                    Exceeded by ₹2,45,200 (24.5% above cap)
                </p>

            </div>
        );
    }


    /* =========================
       BREAKDOWN
    ========================= */

    if (variant === "breakdown") {
        const data = [
            {
                label: "Hardware",
                percentage: "35%",
                color: "bg-primary",
            },
            {
                label: "Travel",
                percentage: "20%",
                color: "bg-red-500",
            },
            {
                label: "Software",
                percentage: "15%",
                color: "bg-green-500",
            },
            {
                label: "Other",
                percentage: "30%",
                color: "bg-orange-400",
            },
        ];

        return (
            <div className="box w-full p-4 sm:p-5 lg:p-6  md:space-y-15">

                <h2 className="font-iceberg text-base text-black sm:text-xl">
                    Category Breakdown
                </h2>

                {/* Donut */}
                <div className="mt-4 flex justify-center sm:mt-5">

                    <div className="relative h-32 w-32 rounded-full bg-[conic-gradient(#1677FF_0_35%,#EF2B2D_35%_55%,#16A34A_55%_70%,#F59E0B_70%_100%)] sm:h-36 sm:w-36 lg:h-50 lg:w-50">

                        <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white sm:inset-6 lg:inset-7">

                            <span className="font-iceberg text-lg sm:text-xl">
                                ₹12.4L
                            </span>

                            <span className="font-iceberg text-[9px] text-secondary sm:text-sm">
                                Total Spent
                            </span>

                        </div>

                    </div>

                </div>

                {/* Legend */}
                <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-5">

                    {data.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between gap-3 font-iceberg text-[11px] sm:text-sm"
                        >

                            <div className="flex min-w-0 items-center gap-2">

                                <span
                                    className={`h-2 w-2 shrink-0 rounded-full ${item.color}`}
                                />

                                <span className="truncate text-sm md:text-xl" >
                                    {item.label}
                                </span>

                            </div>

                            <span className="shrink-0 text-sm md:text-xl">
                                {item.percentage}
                            </span>

                        </div>
                    ))}

                </div>

            </div>
        );
    }

    return null;
}