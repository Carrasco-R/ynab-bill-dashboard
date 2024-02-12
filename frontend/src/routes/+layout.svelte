<script>
  import { page } from "$app/stores";

  const routes = [
    {
      sectionLabel: "Settings",
      paths: [
        {
          label: "Bills",
          route: "/settings/bills",
        },
        {
          label: "Categories",
          route: "/settings/categories",
        },
        {
          label: "General",
          route: "/settings",
        },
      ],
    },
  ];
</script>

<a
  class="btn btn-primary"
  data-bs-toggle="offcanvas"
  href="#offcanvasExample"
  role="button"
  aria-controls="offcanvasExample"
>
  Navigation
</a>

<div
  class="offcanvas offcanvas-start bg-dark text-white"
  tabindex="-1"
  id="offcanvasExample"
  aria-labelledby="offcanvasExampleLabel"
>
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasExampleLabel">Bill Trackr</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    {#each routes as { sectionLabel, paths }}
      <h3>{sectionLabel}</h3>
      <hr />
      <nav class="nav flex-column nav-pills">
        {#each paths as { label, route }}
          <a class="nav-link" class:active={$page.url.pathname == route} href={route}>{label}</a>
        {/each}
      </nav>
    {/each}
  </div>
</div>

<div class="container">
  <slot />
</div>
