import express from "express";
import { Router } from "express";

const app = express();
const router = Router();

router.get("/router", (req, res) => {
  res.send(`<h1> Hello I am searching for you. This is Router Page <h1>`);
});
router.get("/ejs", (req, res) => {
  const students = [
    {
      name: "Ranjeet KC",
      grade: "11th",
      learn: "Account",
    },
    {
      name: "Kushal Sharma",
      grade: "12th",
      learn: "Physics",
    },
    {
      name: "Laxman Thapa",
      grade: "10th",
      learn: "Mathematics",
    },
    {
      name: "Shanti  Basnet",
      grade: "11th",
      learn: "Biology",
    },
    {
      name: "Manish Paudel",
      grade: "12th",
      learn: "Physics",
    },
  ];

  res.render("file", { students });
});
export const myRouter = router;
