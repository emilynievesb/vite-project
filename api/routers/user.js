import { Router } from "express";
const user = Router();

user.get("/", (req, res) => {
  res.status(200).send("Ajaaaa");
});
export { user };
