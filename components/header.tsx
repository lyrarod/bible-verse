import { Book, BookCopy, BookOpenText } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full border-b bg-background/70 backdrop-blur">
      <nav className="flex items-center justify-between w-full max-w-lg p-6 mx-auto sm:p-6">
        <span
          className="flex items-center cursor-pointer select-none gap-x-2"
          title="Bíblia Verso"
        >
          <BookOpenText className="flex sm:w-8 sm:h-8" />{" "}
          <span className="text-xl font-semibold tracking-wide sm:text-2xl">
            Bíblia Verso
          </span>
        </span>

        <ModeToggle />
      </nav>
    </header>
  );
}
