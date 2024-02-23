<script>
  import BillCard from "$lib/components/BillCard.svelte";

  export let data;
  const { bills, categories } = data;
  const billStatusStyleMap = {
    Paid: "text-bg-success border border-success-subtle border-2",
    "Past Due": "text-bg-danger  border border-danger-subtle border-2",
    "Due Today": "text-bg-danger border border-danger-subtle border-2",
    "Due Soon": "text-bg-warning border border-warning-subtle border-2",
    "Not Due Yet": "text-bg-secondary border border-secondary-subtle border-2",
    "No Amount Due": "text-bg-secondary border border-secondary-subtle border-2",
  };
  const monthDayRange = Array.from({ length: 31 }, (_, i) => i + 1);
  const numberPostfix = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
</script>

<div class="mb-5">
  <h1>Monthly Bills</h1>
  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#addBillModal">Add Bill</button>
</div>

<!-- Add Bill Modal -->
<div class="modal fade text-black" id="addBillModal" tabindex="-1" aria-labelledby="addBillModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addBillModal">Add a Bill</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="addBillForm" method="POST">
          <div class="mb-3">
            <label for="billName" class="form-label">Name</label>
            <input required type="text" class="form-control" name="name" id="billName" placeholder="Bill Name.." />
          </div>
          <div class="mb-3">
            <label for="billAmount" class="form-label">Amount</label>
            <input required type="text" class="form-control" name="amount" id="billAmount" placeholder="$$.$$" />
          </div>
          <div class="mb-3">
            <label for="monthlyDueDate" class="form-label">Monthly Due Date</label>
            <select required name="monthlyDueDate" id="monthlyDueDate" class="form-select">
              {#each monthDayRange as day}
                <option value={day}>{day}{numberPostfix[day % 10]}</option>
              {/each}
            </select>
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Category:</label>
            <select required name="category" id="category" class="form-select">
              {#each categories as category}
                <option value={category}>{category}</option>
              {/each}
            </select>
          </div>
          <div class="mb-3">
            <label for="billURL" class="form-label">URL</label>
            <input
              required
              type="text"
              class="form-control"
              name="url"
              id="billUrl"
              placeholder="https://"
              aria-label="Amount"
            />
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" form="addBillForm" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

{#each categories as billCategory}
  <div class="mt-4">
    <h1>{billCategory}</h1>
    <hr />
    <div class="d-flex flex-wrap">
      {#each bills as bill}
        {#if bill.category === billCategory}
          <BillCard {bill}></BillCard>
        {/if}
      {/each}
    </div>
  </div>
{/each}
