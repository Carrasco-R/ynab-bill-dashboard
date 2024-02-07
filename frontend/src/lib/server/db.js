import Database from "better-sqlite3";
const db = new Database("data.sqlite");
// db.pragma("journal_mode = WAL");

// "CREATE TABLE bill_config (id INTEGER PRIMARY KEY,name TEXT, amount INTEGER, monthly_due_date INTEGER, status TEXT, category TEXT, url TEXT)"

export function getSettings(settingKey) {
  const res = db.prepare("SELECT * FROM settings WHERE meta_key = ?").get(settingKey);
  return res["meta_value"];
}

export function addBill(billObj) {
  const res = db
    .prepare("INSERT INTO bill_config (name, amount, monthly_due_date, category, url) VALUES(?,?,?,?,?)")
    .run(billObj["name"], billObj["amount"], billObj["monthlyDueDate"], billObj["category"], billObj["url"]);
}

export function getBills() {
  const res = db.prepare("SELECT * FROM bill_config").all();
  return res;
}
