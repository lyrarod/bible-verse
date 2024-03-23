"use client";

import { useFormStatus } from "react-dom";
import { VerseProps } from "@/app/actions";
import { BookCopy } from "lucide-react";
import { LoadingSkeleton } from "./loading-skeleton";

export function BlockQuote({ verse: { title, text } }: { verse: VerseProps }) {
  const { pending } = useFormStatus();

  return pending ? (
    <LoadingSkeleton />
  ) : (
    <>
      <div className="flex items-baseline w-full gap-x-2 sm:gap-x-4">
        <BookCopy className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />

        <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl scroll-m-20 first:mt-0">
          {title}
        </h2>
      </div>

      <blockquote className="p-6 text-sm italic border shadow dark:border-primary rounded-tr-3xl rounded-bl-3xl sm:text-lg bg-primary-foreground">
        {text && `“${text}”`}
      </blockquote>
    </>
  );
}
