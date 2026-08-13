"use client";

import { useMemo, useState } from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import Radiobtn from "@/components/base/Radiobtn";

interface ExpenseData {
    label: string;
    current: number;
    previous: number;
}

const monthlyData: ExpenseData[] = [
    { label: "Jan", current: 12000, previous: 9000 },
    { label: "Feb", current: 18000, previous: 11000 },
    { label: "Mar", current: 15000, previous: 10000 },
    { label: "Apr", current: 22000, previous: 14000 },
    { label: "May", current: 28000, previous: 20000 },
    { label: "Jun", current: 31000, previous: 23000 },
    { label: "Jul", current: 27000, previous: 18000 },
    { label: "Aug", current: 35000, previous: 17000 },
    { label: "Sep", current: 37000, previous: 21000 },
    { label: "Oct", current: 30000, previous: 25000 },
    { label: "Nov", current: 22000, previous: 29000 },
    { label: "Dec", current: 10000, previous: 32000 },
];

const weeklyData: ExpenseData[] = [
    { label: "Week 1", current: 12000, previous: 9000 },
    { label: "Week 2", current: 18000, previous: 14000 },
    { label: "Week 3", current: 25000, previous: 19000 },
    { label: "Week 4", current: 29500, previous: 23000 },
];

const yearlyData: ExpenseData[] = [
    { label: "2022", current: 42000, previous: 30000 },
    { label: "2023", current: 58000, previous: 45000 },
    { label: "2024", current: 72000, previous: 55000 },
    { label: "2025", current: 90000, previous: 68000 },
    { label: "2026", current: 105000, previous: 82000 },
];

export default function MonthlyExpenseTrend() {
    const [range, setRange] = useState("monthly");

    const data = useMemo(() => {
        switch (range) {
            case "weekly":
                return weeklyData;

            case "yearly":
                return yearlyData;

            default:
                return monthlyData;
        }
    }, [range]);

    return (
        <section
            className=" w-full rounded-[20px] border border-border bg-white px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
            
            <div
                className=" flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2
                    className=" font-iceberg text-xl leading-tight text-[#172033] sm:text-2xl md:text-[26px]">
                    Monthly Expense Trend
                </h2>

                {/* Your existing Radio Button */}
                <Radiobtn
                    variant="range"
                    onChange={(value) => setRange(value)}
                />
            </div>

           
            <div
                className=" mt-6 h-[300px] w-full sm:mt-8 sm:h-[330px] md:mt-10 xl:h-[380px]" >
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 15,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        {/* Very subtle horizontal grid */}
                        <CartesianGrid
                            vertical={false}
                            horizontal={false}
                        />

                        {/* X AXIS */}
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            tick={{
                                fontFamily: "Inter",
                                fontSize: 11,
                                fill: "#344054",
                            }}
                            dy={8}
                        />

                        {/* Hidden Y AXIS */}
                        <YAxis
                            hide
                            domain={[
                                0,
                                (max: number) =>
                                    Math.ceil(max / 10000) * 10000 + 5000,
                            ]}
                        />

                        {/* Tooltip */}
                        <Tooltip
                            cursor={false}
                            content={() => null}
                        />

                        {/* ================= BARS ================= */}

                        <Bar
                            dataKey="current"
                            fill="#CFE0FF"
                            radius={[
                                3,
                                3,
                                0,
                                0,
                            ]}
                            barSize={
                                range === "monthly"
                                    ? 58
                                    : range === "weekly"
                                        ? 70
                                        : 75
                            }
                        />

                        {/* ================= PREVIOUS LINE ================= */}

                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="#E3EDFF"
                            strokeWidth={2}
                            strokeDasharray="8 8"
                            dot={false}
                            activeDot={false}
                            connectNulls
                        />

                        {/* ================= CURRENT LINE ================= */}

                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#1677FF"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            dot={false}
                            activeDot={false}
                            connectNulls
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* ================= DIVIDER ================= */}

            <div className="mt-2 border-t border-border sm:mt-4" />

            {/* ================= LEGEND ================= */}

            <div
                className=" mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 font-iceberg text-xs text-[#344054] sm:mt-6 sm:text-sm ">
                {/* Current Period */}
                <div className="flex items-center gap-2">
                    <span
                        className=" h-3.5 w-3.5 rounded-full bg-primary"/>

                    <span>
                        Current Period
                    </span>
                </div>

                {/* Previous Period */}
                <div className="flex items-center gap-2">
                    <span
                        className=" h-3.5 w-3.5 rounded-full border-2 border-[#98A2B3] bg-[#E5EAF1]"/>

                    <span>
                        Previous Period
                    </span>
                </div>
            </div>
        </section>
    );
}