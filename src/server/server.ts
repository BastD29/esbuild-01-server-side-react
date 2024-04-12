import express from "express";
import cors from "cors";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

const app = express();

if (isDevelopment) {
  app.use(cors());
}

if (isProduction) {
  app.use(express.static("public"));
}

app.get("/api/hello", (req, res) => {
  res.json({ message: "World" });
});

app.listen(3000);
