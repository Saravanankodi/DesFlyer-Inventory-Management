import {
    CalendarDays,
    Clock3,
    TrendingUp,
    Users,
} from "lucide-react";

export default function AnalyticsSummaryBanner() {
    return (
        <section
            className=" w-full rounded-[20px] border border-border bg-[#F1F3FF] px-4 py-4 shadow-sm
 sm:px-5 sm:py-5 lg:px-6
            "
        >
            <div 
            className=" flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between "  >
                {/* Left Statistics */}
                <div
                    className=" grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-x-10 lg:flex lg:items-center lg:gap-12   ">
                    {/* Last Updated */}
                    <div className="flex items-start gap-2">
                        <div
                            className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10
                            "
                        >
                            <CalendarDays
                                size={14}
                                className="text-primary"
                            />
                        </div>

                        <div>
                            <p className="font-inter text-[8px] uppercase tracking-wide text-secondary">
                                Last Updated
                            </p>

                            <p className="mt-0.5 font-iceberg text-xs text-black sm:text-sm">
                                October 12th
                            </p>
                        </div>
                    </div>

                    {/* Data */}
                    <div className="flex items-start gap-2">
                        <div
                            className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10
                            "
                        >
                            <TrendingUp
                                size={14}
                                className="text-primary"
                            />
                        </div>

                        <div>
                            <p className="font-inter text-[8px] uppercase tracking-wide text-secondary">
                                Total Data
                            </p>

                            <p className="mt-0.5 font-iceberg text-xs text-black sm:text-sm">
                                ₹40,167
                            </p>
                        </div>
                    </div>

                    {/* Average */}
                    <div className="flex items-start gap-2">
                        <div
                            className="  flex  h-7  w-7  shrink-0  items-center  justify-center  rounded-lg  bg-primary/10
                            "
                        >
                            <Clock3
                                size={14}
                                className="text-primary"
                            />
                        </div>

                        <div>
                            <p className="font-inter text-[8px] uppercase tracking-wide text-secondary">
                                Average
                            </p>

                            <p className="mt-0.5 font-iceberg text-xs text-black sm:text-sm">
                                4.2 Hours
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Status */}
                <div
                    className=" flex items-center justify-between gap-4 border-t border-border pt-3 sm:justify-end lg:border-t-0 lg:pt-0   "
                >
                    <div className="text-right">
                        <p className="font-inter text-[9px] text-secondary">
                            Data Sync Status
                        </p>

                        <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                            <span className="font-inter text-[9px] text-green-600">
                                Last Sync Processing
                            </span>
                        </div>
                    </div>

                    <div
                        className=" flex h-8 w-8 items-center justify-center rounded-full bg-green-50
                        "
                    >
                        <Users
                            size={14}
                            className="text-green-600"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}