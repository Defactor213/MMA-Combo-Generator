import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "mcg",
});

app.get("/", (req, res) => {
	res.json("hello backend");
});

app.get("/moves", (req, res) => {
	const q = "SELECT * FROM moves";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.listen(8800, () => {
	console.log("connected to backend");
});
