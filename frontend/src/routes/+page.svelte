<script>
  import dayjs from "dayjs";

  let billStatusStyleMap = {
    Paid: "text-bg-success border border-success-subtle border-2",
    "Past Due": "text-bg-danger  border border-danger-subtle border-2",
    "Due Today": "text-bg-danger border border-danger-subtle border-2",
    "Due Soon": "text-bg-warning border border-warning-subtle border-2",
    "Not Due Yet": "text-bg-secondary border border-secondary-subtle border-2",
    "No Amount Due": "text-bg-secondary border border-secondary-subtle border-2",
  };
</script>

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

<!-- how to control what to show fro easiliest month?

Once a bill is created it shows for all months
when a bill is delete it deletes for all months

Set starting month setting in db
set month created setting for each bill  -->
