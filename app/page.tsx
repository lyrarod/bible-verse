import { generateVerse } from "./actions";
import { SubmitButton } from "@/components/submit-button";
import { BlockQuote } from "@/components/block-quote";

export default async function Home() {
  const verse = await generateVerse();

  return (
    <section
      className={`flex flex-col min-h-screen items-center justify-center overflow-hidden`}
    >
      <div className="flex flex-col justify-center w-full max-w-lg min-h-screen p-6 whitespace-pre-wrap">
        <form
          action={generateVerse}
          className="flex flex-col px-4 py-10 space-y-6 border rounded-md shadow-inner sm:px-6 drop-shadow-sm sm:space-y-8 bg-secondary"
        >
          {verse ? <BlockQuote verse={verse} /> : null}

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
