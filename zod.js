// import z from "zod";
// // const ageSchema = z.number().min(17).max(100).int();
// // const userAge = 12;
// // const parseUserAge = ageSchema.safeParse(userAge);
// // console.log(parseUserAge);
// const userSchema = z.object({
//     name: z.string(),
//     age : z.number().min(16),
//     email: z.string(),
//     password: z.string().min(8),
//     isActive: z.boolean().default(true),
//     createdAt: z.date().default(new Date()),
// })
// const data = {
//     name: "Ranjit K.C.",
//     age: 19,
//     email : "ranjit123@gmail.com",
//     password:"12345678",
//     isActive: true,
//     createdAt: new Date()
// }
// const parseUserData = userSchema.safeParse(data);
// console.log(parseUserData);
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express();
// // const PORT = process.env.PORT || 3000;
// const staticPath = path.join(import.meta.dirname, "public");
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   // console.log(import.meta.dirname);
//   // console.log(import.meta.url);
//   // const fileName = new URL(import.meta.url);
//   // const fileName = new URL(import.meta.url).pathname;
//   // console.log(fileName);
//   // res.send("Hello World!");
//   // const indexPagePath = path.join(import.meta.dirname, "public", "index.html");
//   // res.sendFile(indexPagePath);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
