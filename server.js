import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/", async (req, res) => {
  res.send("Hello World!");
});     

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;
  const result = sum(Number(a), Number(b));
  res.send(`The sum of ${a} and ${b} is ${result}`);
});