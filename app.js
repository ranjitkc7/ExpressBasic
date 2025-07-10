import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();
// const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // console.log(import.meta.dirname);
  // console.log(import.meta.url);
  // const fileName = new URL(import.meta.url);
  // const fileName = new URL(import.meta.url).pathname;
  // console.log(fileName);
  // res.send("Hello World!");

  const indexPagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(indexPagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
