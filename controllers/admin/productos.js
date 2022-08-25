const connection = require('../../db');


module.exports.index = (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if(err) throw err;
        res.render('admin/productos/index', { productos: results, layout: 'layout-admin' });
    });
}

//muestra formulario
module.exports.create = (req, res) => {
  res.render('admin/productos/create', { layout: 'layout-admin' });
}

//guarda nuevo producto
module.exports.store = (req, res) => {
  connection.query('INSERT INTO productos SET ?', 
  { nombre: req.body.nombre, categoria_id: req.body.categoria, descripcion: req.body.descripcion},  
    (err, results) => {

    if(err) throw err;

    res.redirect('/admin/productos');
    console.log(results);
});
} 

//muestra el producto segun el id
module.exports.show = (req, res) => {
  connection.query('SELECT * FROM productos WHERE id = ?', [req.params.id],(err, results) => {
      if(err) throw err;
      
      res.render('admin/productos/show', { producto: results[0], layout: 'layout-admin'  });
    //console.log(results)
  });
}

module.exports.edit = (req, res) => {
  connection.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
    if(err) throw err;

    res.render('admin/productos/edit', { producto: results[0], layout: 'layout-admin'  });
    //console.log(results);
  })
}

module.exports.update = (req, res) => {
  connection.query('UPDATE productos SET ? WHERE id = ?', [{ nombre: req.body.nombre, descripcion: req.body.descripcion ,categoria_id: req.body.categoria}, req.body.id], (err) => {
    if(err) throw err;

    res.redirect('/admin/productos');
    console.log('Producto actualizado');
  }
  )
}

module.exports.delete = function(req, res) {
  connection.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err) => {
    if(err) throw err;

    res.redirect('/admin/productos');
    
    console.log('Producto eliminado');
  }
  )
}
  