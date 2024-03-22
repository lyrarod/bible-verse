import { generateVerse } from "./actions";
import { SubmitButton } from "@/components/submit-button";
import { BlockQuote } from "@/components/block-quote";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  const verse = await generateVerse();

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center overflow-hidden`}
    >
      {verse ? (
        <div className="relative flex flex-col justify-center w-full max-w-lg min-h-screen p-6 whitespace-pre-wrap ">
          <span className="absolute top-0 right-0 p-6">
            <ModeToggle />
          </span>
          {/* <code className="relative w-full max-w-lg p-6 font-mono text-xs font-medium rounded bg-muted">
            {verse ? JSON.stringify(verse, null, 2) : null}
          </code> */}

          <form
            action={async () => {
              "use server";
              await new Promise((r) => setTimeout(r, 1000));
              await generateVerse();
            }}
            className="flex flex-col sm:gap-y-8 gap-y-6"
          >
            <BlockQuote verse={verse} />

            <SubmitButton className="flex self-end" />
          </form>
        </div>
      ) : null}
    </main>
  );
}
