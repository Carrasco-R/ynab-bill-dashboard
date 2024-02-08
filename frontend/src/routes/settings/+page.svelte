<script>
  export let data;
  const { categories } = data;
</script>

<h1>Settings</h1>

<div>
  <h4>Categories</h4>
  <form method="post">
    <label for="category"></label>
    <input type="text" name="category" id="category" />
    <button type="submit">Save</button>
  </form>
  {JSON.stringify(categories)}
</div>
