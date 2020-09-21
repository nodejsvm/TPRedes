const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Api GeeSem lista nahuel estuvo aqui." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

/* CODIGO PARA MANEJAR LA INFO DE LA BASE DE DATOS
require("./app/routes/customer.routes.js")(app);

app.listen(...)*/ 