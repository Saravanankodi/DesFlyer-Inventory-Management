interface CardItem {
    title: string;
    value: string;
    description?: string;
    change?: string;
    changeColor?: string;
}

interface StatsCardProps {
    variant: "dashboard" | "expense";
}

const dashboardCards: CardItem[] = [
    {
        title: "Total Spent",
        value: "₹84,500",
        change: "+1.5% from last week",
        changeColor: "text-green-500",
    },
    {
        title: "Average Expense",
        value: "₹2,012",
        description: "Per transaction",
    },
    {
        title: "Expense Entries",
        value: "42",
        description: "This month",
    },
    {
        title: "People/Clients",
        value: "8",
        description: "Active entities",
    },
];

const expenseCards: CardItem[] = [
    {
        title: "Total Expenses",
        value: "₹84,500",
        change: "+4.1% vs prev. month",
        changeColor: "text-red-500",
    },
    {
        title: "Expense Entries",
        value: "42",
        description: "This month",
    },
    {
        title: "People/Clients",
        value: "8",
        description: "Active entities",
    },
];

export default function StatsCard({
    variant,
}: StatsCardProps) {
    const cards =
        variant === "dashboard"
            ? dashboardCards
            : expenseCards;

    return (
        <div
            className={`grid w-full gap-4 ${variant === "dashboard"
                    ? "grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-2 lg:grid-cols-3"
                }`}
        >
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="rounded-lg border border-border bg-white px-4 py-3 sm:px-5 sm:py-4"
                >
                    {/* Title */}
                    <p className="font-iceberg text-xs md:text-[20px] text-black">
                        {card.title}
                    </p>

                    {/* Value */}
                    <p className="mt-1 font-iceberg text-base md:text-2xl text-black sm:text-lg">
                        {card.value}
                    </p>

                    {/* Description */}
                    <p className="mt-1 font-inter text-[8px] md:text-[10px] text-secondary sm:text-[9px]">
                        {card.description}
                    </p>

                    {/* Change */}
                    {card.change && (
                        <p
                            className={`mt-1 font-inter text-[8px] sm:text-[9px] ${card.changeColor || "text-secondary"
                                }`}
                        >
                            {card.change}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}