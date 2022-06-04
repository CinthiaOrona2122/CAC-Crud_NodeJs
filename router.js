const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!!!!!!");
});

router.get("/productos", (req, res) => {
  res.send("Lista de Productos");
});

router.get("/productos/:id", (req, res) => {
  res.send("Producto: " + req.params.id);
});


module.exports = router;