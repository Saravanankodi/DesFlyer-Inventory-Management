import Button from '@/components/base/Button'
import Levelbar from '@/components/base/Levelbar'
import Table from '@/components/base/Table'
import DocumentationStatus from '@/components/cards/DocumentationStatus'
import Infocard from '@/components/cards/Infocard'
import StatsCard from '@/components/cards/StatsCard'
import SpendingTrend from '@/components/charts/SpendingTrend'
import Header from '@/components/layout/Header'
import MonthlyInsight from '@/components/session/dashboard/MonthlyInsight'
import { CalendarDays, ChevronDown, Download } from 'lucide-react'

function Homepage() {
  return (
    <div className="px-3 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 xl:px-10 space-y-5">
      <Header
        heading="Expense Dashboard"
        description="A clear view of Desflyer's spending this month."
      >
        <Button
          variant="date"
          type="button"
          className="w-full m-0 px-2 py-1.5 text-xs flex"
        >
          <CalendarDays
            size={18}
            className="text-primary"
          />

          July 2026

          <ChevronDown size={18} className='hidden md:block'/>
        </Button>
      </Header>
      <StatsCard variant="dashboard" />
      <div className='box'>
        <SpendingTrend />
      </div>
      <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.5fr]">
        <Infocard variant="highest" />
        <MonthlyInsight />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Levelbar variant="recipient" />
        <Levelbar variant="category" /> 
      </div>
      <DocumentationStatus
        billsAttached={32}
        billsMissing={6}
        toReview={4}
      />
      <Table variant="recent" />
      <section className="w-full border-t border-border bg-white">
        <div
          className="  flex min-h-14 w-full items-center justify-between gap-3 px-3 py-2 sm:px-5 md:px-6 lg:px-8 " >
          {/* Left summary */}
          <div className="min-w-0 ">
            <p className="truncate font-iceberg text-sm leading-3 text-secondary sm:text-xs lg:text-lg md:pb-2">
              JULY MONTH SPENDING
            </p>

            <p className="mt-2 truncate font-iceberg text-sm leading-3 text-black sm:text-[9px] md:text-sm lg:text-base">
              ₹84,500 · 42 Entries · 6 Missing Bills
            </p>
          </div>

          {/* Right action */}
          <Button
            type="button"
            variant="primary"
            className=" m-0 w-auto shrink-0 rounded-md px-2.5 py-1.5 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base">
            <Download
              size={18}
              className="shrink-0 sm:h-3 sm:w-3"
            />

            <span className="hidden sm:inline md:text-sm">
              Download Full Report
            </span>

            <span className="sm:hidden">
              Download
            </span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Homepage