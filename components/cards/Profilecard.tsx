"use client";

import {
    UserRound,
    Building2,
} from "lucide-react";

interface ProfilecardItem {
    name: string;
    subtitle: string;
    amount: string;
    image?: string;
    initials?: string;
}

interface ProfilecardProps {
    variant: "employees" | "clients";
}

const employees: ProfilecardItem[] = [
    {
        name: "Rahul Sharma",
        subtitle: "Engineering",
        amount: "₹2,65,000",
        image: "/user.png",
    },
    {
        name: "Anita Desai",
        subtitle: "Marketing",
        amount: "₹1,92,400",
        image: "/user.png",
    },
];

const clients: ProfilecardItem[] = [
    {
        name: "Global Logistics Co.",
        subtitle: "12 Expenses",
        amount: "₹4,10,000",
        initials: "GL",
    },
    {
        name: "NextGen Tech Ltd.",
        subtitle: "8 Expenses",
        amount: "₹3,25,000",
        initials: "NX",
    },
];

export default function Profilecard({
    variant,
}: ProfilecardProps) {
    const isEmployee = variant === "employees";
    const data = isEmployee ? employees : clients;

    return (
        <section className="w-full rounded-[20px] border border-border bg-white p-5 shadow-sm sm:p-6">

            {/* Header */}
            <div className="flex items-center gap-2">
                {isEmployee ? (
                    <UserRound
                        size={22}
                        className="text-primary"
                    />
                ) : (
                    <Building2
                        size={22}
                        className="text-primary"
                    />
                )}

                <h2 className="font-iceberg text-2xl text-black sm:text-3xl">
                    {isEmployee
                        ? "Top Expensive Employees"
                        : "Top Expensive Clients"}
                </h2>
            </div>

            {/* List */}
            <div className="mt-5 space-y-3">
                {data.map((item, index) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 sm:px-4 hover:bg-primary/10"
                    >

                        {/* Avatar */}
                        {isEmployee && item.image ? (
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-iceberg text-xl ${index === 0
                                        ? "bg-blue-100 text-primary"
                                        : "bg-green-100 text-green-600"
                                    }`}
                            >
                                {item.initials}
                            </div>
                        )}

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-iceberg text-lg text-black sm:text-xl">
                                {item.name}
                            </p>

                            <p className="font-iceberg text-sm text-secondary sm:text-base">
                                {item.subtitle}
                            </p>
                        </div>

                        {/* Amount */}
                        <p className="shrink-0 font-iceberg text-lg text-black sm:text-xl">
                            {item.amount}
                        </p>

                    </div>
                ))}
            </div>

        </section>
    );
}