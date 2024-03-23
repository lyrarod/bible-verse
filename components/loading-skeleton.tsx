import { Skeleton } from "./ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 sm:h-14 w-[200px] sm:w-[360px] rounded-full" />
      <Skeleton className="h-4 w-[300px] sm:w-[500px]" />
      <Skeleton className="h-4 w-[260px] sm:w-[460px]" />
      <Skeleton className="h-4 w-[240px] sm:w-[430px]" />
    </div>
  );
}
