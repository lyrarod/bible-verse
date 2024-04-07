import { Skeleton } from "./ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col self-center space-y-4">
      <Skeleton className="h-12 sm:h-14 w-[280px] sm:w-[400px] rounded-full" />
      <Skeleton className="h-4 w-[280px] sm:w-[400px]" />
      <Skeleton className="h-4 w-[280px] sm:w-[400px]" />
      <Skeleton className="h-4 w-[280px] sm:w-[400px]" />
    </div>
  );
}
