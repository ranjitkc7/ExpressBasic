import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { myRouter } from "./routes/router.js";
import studentRouter from "./routes/studentRouter.js";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(myRouter);
app.use("/", studentRouter);

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res) => {
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
