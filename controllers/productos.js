const connection = require('../db');


module.exports.index = (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if(err) throw err;
        res.render('productos/index', { productos: results });
    });
}

//muestra formulario
// module.exports.create = (req, res) => {
//   res.render('productos/create');
// }

// //guarda nuevo producto
// module.exports.store = (req, res) => {
//   connection.query('INSERT INTO productos SET ?', 
//   { nombre: req.body.nombre, categoria_id: req.body.categoria, descripcion: req.body.descripcion},  
//     (err, results) => {

//     if(err) throw err;

//     res.redirect('/productos');
//     console.log(results);
// });
// } 

//muestra el producto segun el id
module.exports.show = (req, res) => {
  connection.query('SELECT * FROM productos WHERE id = ?', [req.params.id],(err, results) => {
      if(err) throw err;
      
      res.render('productos/show', { producto: results[0] });
    //console.log(results)
  });
}

// module.exports.edit = (req, res) => {
//   connection.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
//     if(err) throw err;

//     res.render('productos/edit', { producto: results[0] });
//     //console.log(results);
//   })
// }

// module.exports.update = (req, res) => {
//   connection.query('UPDATE productos SET ? WHERE id = ?', [{ nombre: req.body.nombre, descripcion: req.body.descripcion ,categoria_id: req.body.categoria}, req.body.id], (err) => {
//     if(err) throw err;

//     res.redirect('/productos');
//     console.log('Producto actualizado');
//   }
//   )
// }

// module.exports.delete = function(req, res) {
//   connection.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err) => {
//     if(err) throw err;

//     res.redirect('/productos');
    
//     console.log('Producto eliminado');
//   }
//   )
// }
  