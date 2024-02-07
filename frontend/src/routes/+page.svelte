<script>
  import dayjs from "dayjs";
  export let data;
  const { bills, earliestDate } = data;

  const dateRange = [];
  // let dateWalker = earliestDate
  // while (x = true) {

  // }
  const earliestMonth = dayjs(earliestDate);

  console.log({ earliestMonth });

  const currMonth = dayjs().format("MMMM");

  let billStatusStyleMap = {
    Paid: "text-bg-success border border-success-subtle border-2",
    "Past Due": "text-bg-danger  border border-danger-subtle border-2",
    "Due Today": "text-bg-danger border border-danger-subtle border-2",
    "Due Soon": "text-bg-warning border border-warning-subtle border-2",
    "Not Due Yet": "text-bg-secondary border border-secondary-subtle border-2",
    "No Amount Due": "text-bg-secondary border border-secondary-subtle border-2",
  };
</script>

<div class="modal-body">
  <form id="addBillForm" method="POST">
    <div class="mb-3">
      <label for="billName" class="form-label">Name</label>
      <input type="text" class="form-control" name="name" id="billName" placeholder="Electric Bill" />
    </div>
    <div class="mb-3">
      <label for="billAmount" class="form-label">Amount</label>
      <input type="text" class="form-control" name="amount" id="billAmount" placeholder="Electric Bill" />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Monthly Due Date</label>
      <input type="number" max="31" min="1" class="form-control" name="monthlyDueDate" id="monthly_due_date" />
    </div>
    <div class="mb-3">
      <label for="category" class="form-label">Category:</label>
      <select name="category" id="category">
        <option value="Essential">Essential</option>
        <option value="Credit Cards">Credit Cards</option>
        <option value="Debt">Debt</option>
        <option value="Subscriptions">Subscriptions</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="billURL" class="form-label">URL</label>
      <input type="text" class="form-control" name="url" id="billUrl" placeholder="https://" aria-label="Amount" />
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" form="addBillForm" class="btn btn-primary">Save</button>
</div>

<!--  Add-Bill Modal -->
<div
  class="modal fade text-black"
  id="addBillModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Bill</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="addBillForm" method="POST">
          <div class="mb-3">
            <label for="billName" class="form-label">Name</label>
            <input type="text" class="form-control" id="billName" placeholder="Electric Bill" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Monthly Due Date</label>
            <input type="number" max="31" min="1" class="form-control" name="monthly_due_date" id="monthly_due_date" />
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input type="text" class="form-control" id="category" placeholder="Essential" aria-label="Amount" />
          </div>
          <div class="mb-3">
            <label for="billURL" class="form-label">URL</label>
            <input type="text" class="form-control" id="billUrl" placeholder="https://" aria-label="Amount" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" form="addBillForm" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
<!--  Bill Modal -->
<div class="modal fade text-black" id="billModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Mark as Paid</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>Attach Screenshots</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- App Bar -->
<div>
  <h1>{currMonth}</h1>
  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#addBillModal">Add Bill</button>
</div>

{#each bills as { name, amount, monthly_due_date, status, link_to_pay, category }}
  <!-- {#if category === billCategory} -->
  <div class="card m-1 {billStatusStyleMap[status]}" style="width: 18rem;">
    <div class="card-body">
      <div class="dropdown dropend">
        <button class="btn float-end border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-three-dots-vertical float-end fs-5"></i>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href={link_to_pay}
              >Pay Bill<i class="bi bi-box-arrow-up-right text-black ms-2"></i></a
            >
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
        ${amount} due on the {monthly_due_date}
      </p>
      <p class="card-text">
        Status: {status}
      </p>
    </div>
  </div>
  <!-- {/if} -->
{/each}

<!-- how to control what to show fro easiliest month?

Once a bill is created it shows for all months
when a bill is delete it deletes for all months

Set starting month setting in db
set month created setting for each bill  -->
