import Database from "better-sqlite3";
const db = new Database("data.sqlite");
// db.pragma("journal_mode = WAL");

// "CREATE TABLE bill_config (id INTEGER PRIMARY KEY,name TEXT, amount INTEGER, monthly_due_date INTEGER, category TEXT, url TEXT)"

export function getSettings(settingKey) {
  let res = [];
  res = db.prepare("SELECT * FROM settings WHERE meta_key = ?").all(settingKey);
  return res;
}

export function addBill(billObj) {
  db.prepare("INSERT INTO bill_config (name, amount, monthly_due_date, category, url) VALUES(?,?,?,?,?)").run(
    billObj["name"],
    billObj["amount"],
    billObj["monthlyDueDate"],
    billObj["category"],
    billObj["url"]
  );
}

export function getBills() {
  const res = db.prepare("SELECT * FROM bill_config").all();
  return res;
}

export function addCategory(category) {
  const categoryMetaKey = "categories";
  db.prepare("INSERT INTO settings (meta_key, meta_value) VALUES(?,?)").run(categoryMetaKey, category);
}
