"use client";

import {
    Eye,
    MoreVertical,
    Paperclip,
    Link2Off,
} from "lucide-react";

interface TableProps {
    variant: "recent" | "expenses" | "highest";
}

const recentData = [
    {
        date: "28 Jul 2026",
        paidFor: "ABC Technologies",
        type: "Client",
        purpose: "Hardware Procurement",
        bill: true,
        status: "Verified",
        amount: "₹8,500",
    },
    {
        date: "27 Jul 2026",
        paidFor: "Arjun Kumar",
        type: "Employee",
        purpose: "Petrol/Travel Allowance",
        bill: false,
        status: "Review",
        amount: "₹2,200",
    },
];

const expenseData = [
    {
        date: "28 Jul 2026",
        paidFor: "ABC Technologies",
        type: "CLIENT",
        purpose: "Petrol / Travel",
        amount: "₹1,200",
        receipt: true,
    },
    {
        date: "27 Jul 2026",
        paidFor: "Arjun Kumar",
        type: "EMPLOYEE",
        purpose: "Laptop Service",
        amount: "₹2,500",
        receipt: true,
    },
    {
        date: "25 Jul 2026",
        paidFor: "Desflyer Office",
        type: "COMPANY / OFFICE",
        purpose: "Internet",
        amount: "₹3,000",
        receipt: false,
    },
];

const highestData = [
    {
        rank: "#1",
        name: "Cloud Server Upgrade (AWS)",
        category: "Hardware",
        amount: "₹2,10,000",
        date: "Oct 12, 2023",
    },
    {
        rank: "#2",
        name: "Dubai Client Summit Travel",
        category: "Travel",
        amount: "₹1,85,500",
        date: "Oct 05, 2023",
    },
    {
        rank: "#3",
        name: "Office Annual Insurance",
        category: "Admin",
        amount: "₹1,20,000",
        date: "Oct 18, 2023",
    },
    {
        rank: "#4",
        name: "Adobe Enterprise Licenses",
        category: "Software",
        amount: "₹88,400",
        date: "Oct 20, 2023",
    },
    {
        rank: "#5",
        name: "Team Building Offsite",
        category: "HR",
        amount: "₹75,000",
        date: "Oct 25, 2023",
    },
    {
        rank: "#6",
        name: "Adobe Enterprise Licenses",
        category: "Software",
        amount: "₹88,400",
        date: "Oct 20, 2023",
    },
   
];

export default function Table({ variant }: TableProps) {
    if (variant === "recent") {
        return (
            <div className="box w-full overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 sm:px-6">

                    <h2 className="font-iceberg text-base text-black sm:text-xl">
                        Recent Expenses
                    </h2>

                    <button className="font-iceberg text-sm text-primary sm:text-sm">
                        View All
                    </button>

                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto hide-scroll">

                    <table className="w-full min-w-[700px]">

                        <thead>
                            <tr className="bg-[#F7F8FC]">

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    DATE
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    PAID FOR
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    TYPE
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    PURPOSE
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    BILL
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    STATUS
                                </th>

                                <th className="px-4 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    AMOUNT
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {recentData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-border"
                                >

                                    <td className="px-4 py-3 font-iceberg text-xs md:text-base text-black">
                                        {item.date}
                                    </td>

                                    <td className="px-4 py-3 font-iceberg text-sm md:text-base text-black">
                                        {item.paidFor}
                                    </td>

                                    <td className="px-4 py-3">
                                        <span className="rounded-full bg-primary/10 px-2 py-1 font-iceberg text-xs md:text-base text-primary">
                                            {item.type}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 font-iceberg text-sm md:text-base text-black">
                                        {item.purpose}
                                    </td>

                                    <td className="px-4 py-3">
                                        {item.bill ? (
                                            <Paperclip
                                                size={15}
                                                className="text-green-500"
                                            />
                                        ) : (
                                            <Link2Off
                                                size={15}
                                                className="text-red-400"
                                            />
                                        )}
                                    </td>

                                    <td className="px-4 py-3">
                                        <span
                                            className={`font-iceberg text-sm md:text-base ${item.status === "Verified"
                                                    ? "text-green-500"
                                                    : "text-orange-400"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 font-iceberg text-base md:text-lg font-medium text-black">
                                        {item.amount}
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        );
    }


    if (variant === "expenses") {
        return (
            <div className="w-full overflow-hidden">

                <div className="w-full overflow-x-auto hide-scroll">

                    <table className="w-full min-w-[700px]">

                        <thead>
                            <tr className="bg-[#F0F2FF] grid-cols-6">

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    DATE
                                </th>

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    PAID FOR
                                </th>

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    PURPOSE
                                </th>

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    AMOUNT
                                </th>

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    RECEIPT
                                </th>

                                <th className="px-2 py-3 text-left font-iceberg text-sm md:text-xs xl:text-lg font-medium text-secondary">
                                    ACTION
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {expenseData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-border grid-cols-6"
                                >

                                    <td className="px-2 py-3 font-iceberg text-sm md:text-base text-black">
                                        {item.date}
                                    </td>

                                    <td className="px-2 py-3">

                                        <p className="font-iceberg text-base md:text-base font-semibold text-black">
                                            {item.paidFor}
                                        </p>

                                        <p className="mt-1 font-iceberg text-sm md:text-base text-secondary">
                                            {item.type}
                                        </p>

                                    </td>

                                    <td className="px-2 py-3 font-iceberg text-sm md:text-base text-secondary">
                                        {item.purpose}
                                    </td>

                                    <td className="px-2 py-3 font-iceberg text-sm md:text-base font-semibold text-black">
                                        {item.amount}
                                    </td>

                                    <td className="px-2 py-3">

                                        {item.receipt ? (
                                            <span className="flex items-center gap-1 font-iceberg text-sm md:text-base  text-primary">
                                                <Paperclip size={11} />
                                                Attached
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1 font-iceberg text-sm md:text-base  text-gray-400">
                                                <Link2Off size={11} />
                                                Not Added
                                            </span>
                                        )}

                                    </td>

                                    <td className="px-2 py-3">

                                        <div className="flex items-center gap-3">

                                            <button className="font-inter text-xs md:text-sm font-medium text-primary">
                                                View
                                            </button>

                                            <button className="text-secondary hover:text-primary">
                                                <MoreVertical size={16} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        );
    }


    return (
        <div className="box w-full overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">

                <h2 className="font-iceberg text-2xl text-black sm:text-3xl">
                    Top 10 Highest Expenses
                </h2>

                <button className="font-iceberg text-base text-primary sm:text-lg">
                    View All
                </button>

            </div>


            {/* Table */}
            <div className="w-full overflow-x-auto hide-scroll">

                <table className="w-full min-w-[650px]">

                    <thead>

                        <tr className="bg-[#F0F2FF]">

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Rank
                            </th>

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Expense Name
                            </th>

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Category
                            </th>

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Amount
                            </th>

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Date
                            </th>

                            <th className="px-4 py-3 text-left font-iceberg text-base md:text-base font-medium text-secondary">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {highestData.map((item) => (

                            <tr
                                key={item.rank}
                                className="border-t border-border"
                            >

                                <td className="px-4 py-4 font-iceberg text-sm md:text-base text-black">
                                    {item.rank}
                                </td>

                                <td className="max-w-[180px] px-4 py-4 font-iceberg text-sm md:text-base text-black">
                                    {item.name}
                                </td>

                                <td className="px-4 py-4">

                                    <span
                                        className={`rounded-full px-2.5 py-1 font-iceberg text-sm md:text-xs ${item.category === "Hardware"
                                                ? "bg-primary/10 text-primary"
                                                : item.category === "Travel"
                                                    ? "bg-red-100 text-red-500"
                                                    : item.category === "Software"
                                                        ? "bg-green-100 text-green-600"
                                                        : item.category === "HR"
                                                            ? "bg-orange-100 text-orange-500"
                                                            : "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {item.category}
                                    </span>

                                </td>

                                <td className="px-4 py-4 font-iceberg text-sm md:text-base font-medium text-black">
                                    {item.amount}
                                </td>

                                <td className="px-4 py-4 font-iceberg text-sm md:text-base text-black">
                                    {item.date}
                                </td>

                                <td className="px-4 py-4">

                                    <button className="text-primary hover:opacity-70">
                                        <Eye size={18} />
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}