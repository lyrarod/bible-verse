import { generateVerse } from "./actions";
import { SubmitButton } from "@/components/submit-button";
import { BlockQuote } from "@/components/block-quote";

export default async function Home() {
  const verse = await generateVerse();

  return (
    <section
      className={`flex flex-col min-h-screen items-center justify-center overflow-hidden`}
    >
      {verse ? (
        <div className="flex flex-col justify-center w-full max-w-lg min-h-screen p-6 whitespace-pre-wrap">
          {/* <code className="relative w-full max-w-lg p-6 mb-6 font-mono text-xs font-medium rounded bg-muted">
            {verse ? JSON.stringify(verse, null, 2) : null}
          </code> */}

          <form
            action={async () => {
              "use server";
              await generateVerse();
            }}
            className="flex flex-col sm:gap-y-8 gap-y-4"
          >
            <BlockQuote verse={verse} />

            <SubmitButton className="flex self-end" />
          </form>
        </div>
      ) : null}
    </section>
  );
}
