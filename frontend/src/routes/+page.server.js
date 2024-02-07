import { addBill, getBills } from "$lib/server/db";
import { getSettings } from "../lib/server/db";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    // extract data from FormData obj
    const name = data.get("name");
    const amount = data.get("amount");
    const monthlyDueDate = data.get("monthlyDueDate");
    const category = data.get("category");

    const url = data.get("url");
    const bill = { name, amount, monthlyDueDate, category, url };
    // console.log({ bill });
    const dbRes = addBill(bill);
    return { success: true };
  },
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const earliestDate = getSettings("earliest_date");
  // console.log({ earliestMonth });

  return { bills: getBills(), earliestDate };
}
