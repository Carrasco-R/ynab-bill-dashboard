import { getSettings, addCategory } from "$lib/server/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const categories = getSettings("categories");
  console.log({ categories });
  return { categories };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const category = data.get("category");

    const res = addCategory(category);
    console.log(res);
    return { success: true };
  },
};
