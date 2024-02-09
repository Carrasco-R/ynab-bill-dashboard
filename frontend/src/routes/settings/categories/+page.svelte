<script>
  export let data;
  const { categories } = data;

  async function deleteCategory(id) {
    const body = { id: id };
    await fetch("/settings/categories", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    location.reload();
  }
</script>

<div>
  <h4>Categories</h4>
  <form method="post">
    <label for="category"></label>
    <input type="text" name="category" id="category" />
    <button type="submit">Save</button>
  </form>

  <ul class="list-group">
    {#each categories as { id, meta_value }}
      <ul class="list-group list-group-horizontal-sm">
        <button
          on:click={() => deleteCategory(id)}
          class="list-group-item list-group-item-action list-group-item-danger w-auto"
        >
          <i class="bi bi-trash"></i>
        </button>
        <li class="list-group-item">{meta_value}</li>
      </ul>
    {/each}
  </ul>
</div>
