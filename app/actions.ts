"use server";

import { delay } from "@/lib/utils";
import { revalidateTag } from "next/cache";

const url: string = process.env.BIBLE_API_URL! || "";

export type VerseType = {
  title: string;
  text: string;
};

export async function generateVerse() {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      next: {
        tags: ["verse"],
      },
    });
    const data = await response.json();

    const formattedData: VerseType = {
      title: data.reference,
      text: data.text?.trim(),
    };

    revalidateTag("verse");
    await delay(1000);
    return formattedData;
    // ...
  } catch (error) {
    return console.log(error);
  }
}
