import Button from '@/components/base/Button'
import Levelbar from '@/components/base/Levelbar'
import Table from '@/components/base/Table'
import DocumentationStatus from '@/components/cards/DocumentationStatus'
import Infocard from '@/components/cards/Infocard'
import StatsCard from '@/components/cards/StatsCard'
import SpendingTrend from '@/components/charts/SpendingTrend'
import Header from '@/components/layout/Header'
import MonthlyInsight from '@/components/session/dashboard/MonthlyInsight'
import { Download } from 'lucide-react'

function Homepage() {
  return (
    <div className="p-8 space-y-5">
      <Header
        heading="Expense Dashboard"
        description="A clear view of Desflyer's spending this month."
      >
        <Button variant="secondary">
          July 2026
        </Button>
      </Header>
      <StatsCard variant="dashboard" />
      <div className='box'>
        <SpendingTrend />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.5fr]">
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
          className=" mx-auto flex min-h-[56px] w-full items-center justify-between gap-3 px-3 py-2 sm:px-5 md:px-6 lg:px-8 " >
          {/* Left summary */}
          <div className="min-w-0 ">
            <p className="truncate font-iceberg text-[10px] leading-3 text-secondary sm:text-xs md:pb-2">
              JULY MONTH SPENDING
            </p>

            <p className="truncate font-iceberg text-xs leading-3 text-black sm:text-[9px] md:text-sm">
              ₹84,500 · 42 Entries · 6 Missing Bills
            </p>
          </div>

          {/* Right action */}
          <Button
            type="button"
            variant="primary"
            className=" m-0 w-auto shrink-0 rounded-md px-2.5 py-1.5 text-[7px] sm:px-3 sm:py-1.5 sm:text-[8px] md:px-4 md:py-2 md:text-[9px]">
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