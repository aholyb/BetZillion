import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
const port = 3001;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'betzillion',
});

// Test for apply sql to node
app.get('/api/users', (req, res) => {
  const sql = `SELECT * FROM users`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`The server started on the port ${port}`);
});
