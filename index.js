const express = require("express");
const app = express();
require("dotenv").config();
const testroute = require("./routes/TestRoutes.js");
const categoryroute = require("./routes/CategoryRoute.js");
const catroute = require("./routes/CatRoute.js");
require(`./database/connection.js`);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.json());

console.log(process.env.PORT);
app.use(testroute);
app.use("/category", categoryroute);
app.use("/cat", catroute);
