"use server";

import { revalidateTag } from "next/cache";

export type VerseProps = {
  title: string;
  text: string;
};

const URL: string = process.env.BIBLE_API_URL! || "";

const config: {} = {
  cache: "no-store",
  next: {
    tags: ["verse"],
  },
};

export async function generateVerse() {
  try {
    const response = await fetch(URL, config);
    const data = await response.json();

    const formattedData: VerseProps = {
      title: data.reference,
      text: data.text?.trim(),
    };

    revalidateTag("verse");
    return formattedData;
    // ...
  } catch (error) {
    return console.log(error);
  }
}