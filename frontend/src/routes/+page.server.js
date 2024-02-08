import { addBill, getBills } from "$lib/server/db";
import { getSettings } from "../lib/server/db";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const earliestDate = getSettings("earliest_date");
  // console.log({ earliestMonth });

  return { bills: getBills(), earliestDate };
}
