"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { RefreshCwIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubmitButton({ className }: { className?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      size={"icon"}
      variant={"default"}
      title={"Gerar verso"}
      className={cn("select-none", className)}
    >
      {pending ? (
        <RefreshCwIcon className="w-5 h-5 animate-spin" />
      ) : (
        <RefreshCwIcon className="w-5 h-w-5" />
      )}
    </Button>
  );
}
