import express from "express";
import connect from "./config/database.js";
import route from "./routes/todos.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/api", route);
connect();
app.listen(3000, () => {
  console.log("server started");
});
