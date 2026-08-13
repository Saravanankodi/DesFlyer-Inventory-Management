"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const start =
        totalItems === 0
            ? 0
            : (currentPage - 1) * itemsPerPage + 1;

    const end = Math.min(
        currentPage * itemsPerPage,
        totalItems
    );

    return (
        <div className="flex w-full flex-col gap-4 border-t border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            {/* Showing text */}
            <p className="font-inter text-xs text-secondary sm:text-sm">
                Showing {start}–{end} of {totalItems} expenses
            </p>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">

                {/* Previous */}
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-secondary transition hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Pages */}
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                )
                    .filter((page) => {
                        if (totalPages <= 5) return true;

                        return (
                            page === 1 ||
                            page === totalPages ||
                            Math.abs(page - currentPage) <= 1
                        );
                    })
                    .map((page, index, pages) => {
                        const previousPage = pages[index - 1];

                        return (
                            <div
                                key={page}
                                className="flex items-center"
                            >
                                {previousPage &&
                                    page - previousPage > 1 && (
                                        <span className="px-2 font-inter text-xs text-secondary">
                                            ...
                                        </span>
                                    )}

                                <button
                                    type="button"
                                    onClick={() =>
                                        onPageChange(page)
                                    }
                                    className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 font-inter text-xs transition sm:text-sm ${currentPage === page
                                            ? "bg-primary text-white"
                                            : "text-black hover:text-primary"
                                        }`}
                                >
                                    {page}
                                </button>
                            </div>
                        );
                    })}

                {/* Next */}
                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-secondary transition hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronRight size={16} />
                </button>

            </div>
        </div>
    );
}