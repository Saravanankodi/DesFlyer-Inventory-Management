import React from "react";

interface TagsProps {
  words: string;
  color?: string;
  bg?: string;
}

function Tags({
  words,
  color = "text-primary",
  bg = "bg-primary/30",
}: TagsProps) {
  return (
    <div
      className={`w-fit rounded-2xl px-4 py-1 text-center shadow-md ${bg}`}
    >
      <p className={`font-iceberg text-xs font-medium ${color}`}>
        {words}
      </p>
    </div>
  );
}

export default Tags;