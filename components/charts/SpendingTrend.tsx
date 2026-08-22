"use client";

import { useMemo, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import Radiobtn from "@/components/base/Radiobtn";

interface SpendingData {
    label: string;
    amount: number;
    previous: number;
}

const weeklyData: SpendingData[] = [
    { label: "Week 1", amount: 12000, previous: 1000 },
    { label: "Week 2", amount: 18000, previous: 16000 },
    { label: "Week 3", amount: 25000, previous: 22000 },
    { label: "Week 4", amount: 29500, previous: 27000 },
];

const dailyData: SpendingData[] = [
    { label: "Mon", amount: 3200, previous: 2800 },
    { label: "Tue", amount: 5100, previous: 4500 },
    { label: "Wed", amount: 4300, previous: 3900 },
    { label: "Thu", amount: 7200, previous: 6100 },
    { label: "Fri", amount: 5800, previous: 5200 },
    { label: "Sat", amount: 8200, previous: 7100 },
    { label: "Sun", amount: 6900, previous: 6200 },
];

export default function SpendingTrend() {
    const [view, setView] = useState<"weekly" | "daily">("weekly");

    const data = useMemo(() => {
        return view === "weekly" ? weeklyData : dailyData;
    }, [view]);

    const highest = Math.max(...data.map((item) => item.amount));



    return (
        <section className="w-full box bg-white p-4 sm:p-5 md:p-6">

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                    <h2 className="font-iceberg text-xl leading-tight text-black sm:text-2xl xl:text-3xl">
                        Spending Trend
                    </h2>

                    <p className="mt-2 font-iceberg text-xs sm:text-sm text-black md:text-xs xl:text-sm">
                        Weekly expenditure overview
                    </p>
                </div>

                {/* Existing Radio Button */}
                <Radiobtn
                    variant="view"
                    onChange={(value) => {
                        if (value === "weekly" || value === "daily") {
                            setView(value);
                        }
                    }}
                />

            </div>

            {/* Chart */}
            <div className="mt-6 h-[220px] w-full sm:h-[240px] md:h-[260px]">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 25,
                            left: 30,
                            bottom: 5,
                        }}
                    >

                        {/* X Axis */}
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: 15,
                                fill: "#000000",
                                fontFamily: "Inter",
                            }}
                            dy={10}
                        />

                        {/* Y Axis */}
                        <YAxis
                            hide
                            domain={[
                                0,
                                (max: number) =>
                                    Math.ceil(max / 5000) * 5000 + 5000,
                            ]}
                        />

                        {/* Tooltip */}
                        <Tooltip
                            cursor={false}
                            content={({ active, payload }) => {
                                if (!active || !payload?.length) {
                                    return null;
                                }

                                const item = payload[0]
                                    .payload as SpendingData;

                                return (
                                    <div className="box px-3 py-2 shadow-md">
                                        <p className="font-inter text-[10px] xl:text-base text-secondary">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 font-iceberg text-sm  xl:text-lg text-primary">
                                            ₹{item.amount.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                );
                            }}
                        />

                        {/* Previous / comparison line */}
                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="#B8D2FF"
                            strokeWidth={6}
                            strokeDasharray="12 12"
                            dot={false}
                            activeDot={false}
                            isAnimationActive
                        />

                        {/* Main line */}
                        <Line
                            type="monotone"
                            dataKey="amount"
                            stroke="#1677FF"
                            strokeWidth={7}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            dot={false}
                            activeDot={{
                                r: 5,
                                fill: "#1677FF",
                                stroke: "#FFFFFF",
                                strokeWidth: 2,
                            }}
                            isAnimationActive
                            animationDuration={700}
                        />

                    </LineChart>
                </ResponsiveContainer>

            </div>

            {/* Bottom highest information */}
            <div className="md:mt-4 flex items-center justify-end">

                <div className="flex flex-col items-center">

                    <span className="rounded-md bg-primary px-2 py-1 font-inter text-sm font-medium text-white sm:text-xs xl:text-base">
                        HIGHEST
                    </span>

                    <span className="mt-1 font-iceberg text-sm text-primary sm:text-xs xl:text-base">
                        ₹{highest.toLocaleString("en-IN")}
                    </span>

                </div>

            </div>

        </section>
    );
}