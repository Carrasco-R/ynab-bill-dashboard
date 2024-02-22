import { deleteCategory } from "$lib/server/db";

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  const { id, category } = await request.json();
  console.log({ id, category });
  const res = deleteCategory(id, category);
  if (!res) {
    return new Response("Error", { status: 400, statusText: "Cannot Delete. Bills with this category exist" });
  }
  return new Response();
}
