"use client";

import Header from "@/components/layout/Header";
import Button from "@/components/base/Button";

import {
    CalendarDays,
    Download,
} from "lucide-react";

import AnalyticsFilters from "@/components/session/analytics/AnalyticsFilters";
import AnalyticsSummaryBanner from "@/components/session/analytics/AnalyticsSummaryBanner";
import Levelbar from "@/components/base/Levelbar";
import Infocard from "@/components/cards/Infocard";
import Table from "@/components/base/Table";
import Profilecard from "@/components/cards/Profilecard";
import MonthlyExpenseTrend from "@/components/charts/MonthlyExpenseTrend";
import StatsCard from "@/components/cards/StatsCard";


export default function AnalyticsPage() {
    return (
        <main className="px-6 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 xl:px-10  min-h-screen w-full ">
            <div
                className=" w-full max-w-[1600px]  "
            >
              
                <header className="mb-4">
                    <div
                        className=" flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between ">
                        <Header
                            heading="Expense Analytics"
                            description="Analyze company spending and financial performance across all departments."
                        />

                       
                       <div className="flex gap-4">
                            <Button
                                variant="date"
                                type="button"
                                className=" m-0 min-w-40 w-full self-end px-3 py-1.5 text-sm" >
                                <CalendarDays
                                    size={18}
                                    className="text-primary"
                                />

                                October 2026
                            </Button>
                            <Button
                                variant="date"
                                type="button"
                                className=" m-0 min-w-30 w-full self-end px-3 py-1.5 text-sm" >
                                <Download
                                    size={18}
                                    className="text-primary"
                                />

                                Export
                            </Button>
                       </div>
                    </div>
                    <div className="mt-4">
                    <AnalyticsFilters />
                    </div>
                </header>
 
                <div className="mb-4 lg:px-20">
                   <StatsCard variant="expense"/>
                </div>


                <section
                    className=" grid grid-cols-1 gap-3 mb-3 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
                    <MonthlyExpenseTrend/>

                    <Levelbar variant="breakdown" />
                </section>

              

                <section
                    className="
                        grid
                        grid-cols-1
                        gap-3
                        mb-3

                        lg:grid-cols-2
                    "
                >
                    <Levelbar variant="spending" />
                    <section className="mb-3 space-y-3">
                        <Levelbar variant="budget" />
                        <Infocard variant="departmental" />
                    </section>
                    
                </section>


                <section
                    className=" grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
                    {/* Left */}
                    <Table variant="highest" />

                    {/* Right */}
                    <div className="flex flex-col gap-3">
                        <Profilecard variant="employees" />

                        <Profilecard variant="clients" />
                    </div>
                </section>

                <section className="mt-3">
                    <AnalyticsSummaryBanner />
                </section>
            </div>
        </main>
    );
}