import express from "express";
import db from "../db.js";

const router = express.Router();

// 🔹 Register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User registered successfully" });
  });
});

// 🔹 Login + save login history
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const user = results[0];
    const logSql = "INSERT INTO login_history (user_id, username, login_time) VALUES (?, ?, NOW())";
    db.query(logSql, [user.id, user.username], () => {});
    
    res.json({ message: "Login successful", user });
  });
});

// 🔹 Fetch Login History
router.get("/login-history", (req, res) => {
  db.query("SELECT * FROM login_history ORDER BY login_time DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});




export default router;
