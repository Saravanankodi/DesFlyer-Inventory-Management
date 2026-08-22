"use client";

import {
    Building2,
    UserRound,
    Palette,
    Megaphone,
    UsersRound,
} from "lucide-react";
import Tabs from "../base/Tabs";

interface SpendingSectionProps {
    variant: "departmental" | "highest";
}

const departments = [
    {
        name: "Dev",
        amount: "₹4.2L",
        percentage: "33%",
        icon: Building2,
    },
    {
        name: "Design",
        amount: "₹1.8L",
        percentage: "14%",
        icon: Palette,
    },
    {
        name: "Marketing",
        amount: "₹2.1L",
        percentage: "17%",
        icon: Megaphone,
    },
    {
        name: "HR/Admin",
        amount: "₹1.5L",
        percentage: "12%",
        icon: UsersRound,
    },
];

const highestSpending = [
    {
        name: "ABC Technologies",
        type: "CLIENT",
        amount: "₹15,500",
        icon: Building2,
    },
    {
        name: "Arjun Kumar",
        type: "EMPLOYEE",
        amount: "₹8,500",
        icon: UserRound,
    },
    {
        name: "XYZ Solutions",
        type: "CLIENT",
        amount: "₹7,200",
        icon: Building2,
    },
    {
        name: "Priya Sharma",
        type: "EMPLOYEE",
        amount: "₹6,500",
        icon: UserRound,
    },
];

export default function SpendingSection({
    variant,
}: SpendingSectionProps) {
  

    if (variant === "departmental") {
        return (
            <section className="w-full box p-5 sm:p-6 lg:p-7">

                <h2 className="font-iceberg text-xl text-black sm:text-2xl">
                    Departmental Share
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-5  sm:gap-6">
                    {departments.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.name}
                                className="flex items-center gap-4"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon size={22} />
                                </div>

                                {/* Details */}
                                <div>
                                    <p className="font-iceberg text-base text-black sm:text-xl">
                                        {item.name}
                                    </p>

                                    <p className="font-iceberg text-sm text-secondary sm:text-sm">
                                        {item.amount} ({item.percentage})
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }


    return (
        <section className="w-full box p-5 sm:p-6 lg:p-7">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="font-iceberg text-xl text-black sm:text-2xl xl:text-3xl">
                    Highest Spending
                </h2>

                <button
                    type="button"
                    className="font-iceberg text-sm text-primary hover:underline sm:text-sm xl:text-lg"
                >
                    View All
                </button>
            </div>

            {/* Tabs */}
            <Tabs
                tabs={[
                    {
                        id: "amount",
                        label: "By Amount",
                    },
                    {
                        id: "frequency",
                        label: "By Frequency",
                    },
                ]}
            />

            {/* List */}
            <div className="mt-5 space-y-5">
                {highestSpending.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.name}
                            className="flex items-center gap-3"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon size={22} />
                            </div>

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate font-iceberg text-base sm:text-lg text-black md:text-base xl:text-lg">
                                    {item.name}
                                </p>

                                <p className="font-iceberg text-sm uppercase text-secondary sm:text-xs xl:text-base">
                                    {item.type}
                                </p>
                            </div>

                            {/* Amount */}
                            <p className="shrink-0 font-iceberg text-lg text-black sm:text-base xl:text-lg">
                                {item.amount}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}