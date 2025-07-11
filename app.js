import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hello ${req.params.username}. Where are you from?<h1>`);
});
app.get("/profile/:username/article/:data", (req, res) => {
  console.log(req.params);
  const formattedData = req.params.data.replace(/-/g, " ");
  res.send(`<h1> The article ${formattedData}  by ${req.params.username}.<h1>`);
});

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Product Page and our product is ${req.query.search} with
    price ${req.query.price}.<h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
