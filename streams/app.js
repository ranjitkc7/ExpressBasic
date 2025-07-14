import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFile = path.join(import.meta.dirname, "input.txt");
const outputFile = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFile, {
  encoding: "utf-8",
  highWaterMark: 16,
});

const writableStream = createWriteStream(outputFile);
readableStream.pipe(writableStream);

readableStream.on("error", (err) => console.error("Error", err));
writableStream.on("error", (err) => console.error("Error", err));
