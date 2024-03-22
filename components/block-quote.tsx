"use client";

import { useFormStatus } from "react-dom";
import { Skeleton } from "./ui/skeleton";
import { VerseProps } from "@/app/actions";
import { BookCopy } from "lucide-react";

export function BlockQuote({ verse: { title, text } }: { verse: VerseProps }) {
  const { pending } = useFormStatus();

  return pending ? (
    <div className="space-y-4">
      <Skeleton className="h-12 sm:h-14 w-[200px] sm:w-[360px] rounded-full" />
      <Skeleton className="h-4 w-[300px] sm:w-[500px]" />
      <Skeleton className="h-4 w-[260px] sm:w-[460px]" />
      <Skeleton className="h-4 w-[240px] sm:w-[430px]" />
    </div>
  ) : (
    <>
      <div className="flex items-baseline w-full border-b gap-x-2 sm:gap-x-4">
        <BookCopy className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />

        <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl scroll-m-20 first:mt-0 ">
          {title}
        </h2>
      </div>

      <blockquote className="pl-2 italic border-l-2 sm:text-lg sm:pl-4 border-primary">
        {text && `“${text}”`}
      </blockquote>
    </>
  );
}
