import { LoadingSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center overflow-hidden`}
    >
      <LoadingSkeleton />
    </main>
  );
}
