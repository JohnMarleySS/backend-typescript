import mysql2 from "mysql2";

const pool = mysql2.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "notes_app",
});

const results = pool.query("SELECT * FROM notes");
console.log(results);
