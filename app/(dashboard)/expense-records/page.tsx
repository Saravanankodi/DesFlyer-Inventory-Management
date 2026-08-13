"use client"
import Pagination from '@/components/base/Pagination'
import Search from '@/components/base/Search'
import Table from '@/components/base/Table'
import Header from '@/components/layout/Header'
import ExpenseFilters from '@/components/session/expense/ExpenseFilters'
import { useState } from 'react'

function ExpenseRecordsPage() {
    const [page, setPage] = useState(1);
  return (
    <div className="p-8 space-y-5">
          <Header heading="Expense Records" description="Record a company expense and keep your monthly spending accurate." />
          <Search/>
      <ExpenseFilters
        totalExpenses={42}
        totalAmount="₹84,500"
      />
          <Table variant="expenses" />
          <Pagination
                    currentPage={page}
                    totalPages={5}
                    totalItems={42}
                    itemsPerPage={10}
                    onPageChange={setPage}
                  />
    </div>
  )
}

export default ExpenseRecordsPage