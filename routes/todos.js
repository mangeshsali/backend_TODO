import { Router } from "express";
import { Deleted, Finded, Updated, created } from "../controller/index.js";

const route = Router();

route.get("/welcome", (req, res) => {
  res.send("<h1>Welcome </h1>");
});
route.post("/add", created);
route.get("/find/:id", Finded);
route.put("/update/:id", Updated);
route.get("/delete/:id", Deleted);

export default route;
