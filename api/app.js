import express from "express";
import cors from "cors";
import { user } from "./routers/user.js";
const app = express();

const config = {
  port: 5117,
  hotname: "127.19.2.1",
};

app.use(cors());
app.use("/user", user);

app.listen(config, () => {
  console.log(`http://${config.hotname}:${config.port}`);
});
