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
                    className=" grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-x-10 lg:flex lg:items-center lg:gap-12   ">
                    {/* Last Updated */}
                    <div className="flex items-start gap-2">
                        

                        <div>
                            <p className="font-inter text-[9px] sm:text-xs uppercase tracking-wide text-secondary">
                                PEAK SPENDING DAY                               
                            </p>

                            <p className="mt-0.5 font-iceberg text-lg  text-black sm:text-lg">
                                October 12th
                            </p>
                        </div>
                    </div>

                    {/* Data */}
                    <div className="flex items-start gap-2">
                       

                        <div>
                            <p className="font-inter text-[9px] sm:text-xs uppercase tracking-wide text-secondary">
                                AVG DAILY BURN
                            </p>

                            <p className="mt-0.5 font-iceberg text-lg  text-black sm:text-lg">
                                ₹40,167
                            </p>
                        </div>
                    </div>

                    {/* Average */}
                    <div className="flex items-start gap-2">
                        

                        <div>
                            <p className="font-inter text-[9px] sm:text-xs uppercase tracking-wide text-secondary">
                                APPROVAL VELOCITY
                            </p>

                            <p className="mt-0.5 font-iceberg text-lg  text-black sm:text-lg">
                                4.2 Hours
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Status */}
                <div
                    className=" flex items-center justify-center gap-4 border-t border-border pt-3 sm:justify-end lg:border-t-0 lg:pt-0   "
                >
                    <div className="text-center">
                        <p className="font-inter text-xs md:text-sm text-secondary">
                            Data sync: 2 mins ago                           
                        </p>

                        <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                            <span className="font-inter text-xs md:text-sm text-green-600">
                                Live System Monitoring
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}