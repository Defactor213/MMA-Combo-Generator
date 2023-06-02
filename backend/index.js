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

// moves table
// get all
app.get("/moves", (req, res) => {
	const q = "SELECT * FROM moves";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

// add moves
app.post("/moves", (req, res) => {
	const q = "INSERT INTO moves (move_name) VALUES (?)";

	const values = [req.body.move_name];

	db.query(q, values, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

// Delete moves
app.delete("/moves/:id", (req, res) => {
	const q = "DELETE FROM moves WHERE id = ? ";

	const moveid = req.params.id;

	db.query(q, [moveid], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

// combos table
app.get("/combos", (req, res) => {
	const q = "SELECT * FROM combos";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

// favorite combo
app.put("/combos/:id", (req, res) => {
	const comboId = req.params.id;
	console.log("id is " + comboId);

	const q = "UPDATE combos SET favorites = true WHERE id = ?";
	const values = [comboId];
	db.query(q, values, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		} else {
			return res.json({
				message: "Combo favorites updated successfully",
			});
		}
	});
});

app.listen(8800, () => {
	console.log("connected to backend");
});
