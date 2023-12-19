import bodyParser from "body-parser";
import router from "./routes/routes";
import express from "express";

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log("server aberto");
});
