const express = require("express");
const router = express.Router();

// const productos = require('../productos');
const connection = require('../db');

router.get("/productos", (req, res) => {
    connection.query('SELECT id, nombre FROM productos', (error, results) => {
        if(error) throw error;
        res.render('productos/index', { productos: results });
    });
})

router.get('/productos/create', (req, res) => {
  res.render('productos/create');
})

router.post('/productos/store', (req, res) => {
  connection.query('INSERT INTO productos SET ?', 
  { nombre: req.body.nombre, categoria_id: req.body.categoria},  
    (error, results) => {
    if(error) throw error;
    res.redirect('/productos');
    console.log(results);
})

});

router.get("/productos/:id", (req, res) => {
  connection.query('SELECT * FROM productos WHERE id = ?', [req.params.id],(error, results) => {
      if(error) throw error;
      res.render('productos/show', { producto: results[0] });
    console.log(results)
  });
})

module.exports = router;