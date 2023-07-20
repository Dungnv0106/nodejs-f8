import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("short"));
app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

// console.log(app);
