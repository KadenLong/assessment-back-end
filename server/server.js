const express = require("express");
const cors = require("cors");
const ctrl = require('./controller.js')
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/truth", ctrl.getTruth)
app.get("/api/animal", ctrl.getAnimal)
app.get("/api/bands", ctrl.getAllBands)

app.listen(4000, () => console.log("Server running on 4000"));
