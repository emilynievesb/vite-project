import express from "express";
import cors from "cors";
import { user } from "./routers/user.js";
const app = express();

const config = {
  port: 5117,
  hotname: "192.168.129.72",
};

app.use(cors());
app.use("/user", user);

app.listen(config, () => {
  console.log(`http://${config.hotname}:${config.port}`);
});
