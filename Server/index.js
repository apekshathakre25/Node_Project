const express = require("express");
const userRouter = require("./Routes/user");
const cors = require("cors");
const { connectToDb } = require("./connection");

const app = express();
const port = 7501;

connectToDb("mongodb://127.0.0.1:27017/Series").then(() => {
  console.log("MongoDb Connected");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);

app.listen(port, () => console.log("Server started on port", port));
