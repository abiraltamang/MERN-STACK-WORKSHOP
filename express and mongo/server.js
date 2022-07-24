// importing express packageg
const express = require("express");
const router = require("./routes");

//creating new instance of the express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3001, () => {
  console.log("App listening on port http://localhost:3001");
});
