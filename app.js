const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Tamo activo" });
})

app.get("/clientes", (req, res) => {
    res.status(200).json({ message: "Ok", clients: ["Primer Cliente","Segundo Cliente","Tercer Cliente"]  });
})

module.exports = app;