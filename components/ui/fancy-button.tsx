"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // assumes you already have cn util in your project

interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function FancyButton({ className, ...props }: FancyButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md hover:opacity-90",
        className
      )}
      {...props}
    />
  );
}
