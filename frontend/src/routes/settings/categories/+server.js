import { deleteSetting } from "$lib/server/db";

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  const { id } = await request.json();
  console.log({ id });
  deleteSetting(id);
  return new Response();
}
