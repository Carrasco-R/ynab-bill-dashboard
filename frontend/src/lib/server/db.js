import sql3 from "sqlite3";
const sqlite3 = sql3.verbose();
const db = new sqlite3.Database("data.db");

// init
db.serialize(() => {
  db.run(
    "CREATE TABLE bill_config (name TEXT, amount INTEGER, monthly_due_date INTEGER, status TEXT, link_to_pay TEXT, category TEXT )"
  );
});

db.close();
