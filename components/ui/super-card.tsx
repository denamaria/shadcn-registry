"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SuperCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SuperCard({ className, children, ...props }: SuperCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white shadow-md p-6 hover:shadow-lg transition-shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
