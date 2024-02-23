<script>
  export let bill;
  $: ({ name, amount, monthly_due_date, url } = bill);
  const billStatusStyleMap = {
    Paid: "text-bg-success border border-success-subtle border-2",
    "Past Due": "text-bg-danger  border border-danger-subtle border-2",
    "Due Today": "text-bg-danger border border-danger-subtle border-2",
    "Due Soon": "text-bg-warning border border-warning-subtle border-2",
    "Not Due Yet": "text-bg-secondary border border-secondary-subtle border-2",
    "No Amount Due": "text-bg-secondary border border-secondary-subtle border-2",
  };
  const numberPostfix = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
</script>

<div class="card m-1" style="width: 18rem;">
  <div class="card-body">
    <div class="dropdown dropend">
      <button class="btn float-end border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-three-dots-vertical float-end fs-5"></i>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" rel="external" href="https://{url}">
            Pay Bill<i class="bi bi-box-arrow-up-right text-black ms-2"></i>
          </a>
        </li>
        <li>
          <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#billModal">
            Mark as Paid
          </button>
        </li>
      </ul>
    </div>

    <h5 class="card-title pt-2"><strong>{name}</strong></h5>
    <p class="card-text">
      ${amount} due on the {monthly_due_date}{numberPostfix[monthly_due_date % 10]}
    </p>
  </div>
</div>
