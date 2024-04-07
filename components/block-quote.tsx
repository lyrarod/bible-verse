"use client";

import { useFormStatus } from "react-dom";
import { VerseType } from "@/app/actions";
import { LoadingSkeleton } from "./loading-skeleton";

export function BlockQuote({ verse: { title, text } }: { verse: VerseType }) {
  const { pending } = useFormStatus();

  return pending ? (
    <LoadingSkeleton />
  ) : (
    <>
      <h1 className="pl-2 text-2xl font-semibold tracking-tight border-l-4 border-primary sm:text-4xl">
        {title}
      </h1>
      <blockquote className="text-sm italic sm:text-base">{`“${text}”`}</blockquote>
    </>
  );
}
