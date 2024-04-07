"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { RefreshCwIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function SubmitButton({ className, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      size={"default"}
      variant={"default"}
      {...props}
      className={cn(
        "select-none w-full flex gap-x-3 uppercase text-xs font-semibold",
        className
      )}
    >
      {pending ? (
        <>
          {"Gerando verso..."} <RefreshCwIcon className="size-4 animate-spin" />
        </>
      ) : (
        <>
          {"Gerar novo verso"} <RefreshCwIcon className="size-4" />
        </>
      )}
    </Button>
  );
}
