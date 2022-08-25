const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

const connection = require('../db');

router.get('/registro', [
    body('email', 'El email es requerido y tiene que ser valido').exists().isEmail().normalizeEmail(),
    body('password', 'El password es requerido y tiene que ser valido').exists().trim().notEmpty().escape().isLength({ min: 3 }),
], (req, res) => {
    const errors = validationResult(req);
    // console.log(req.body, errors);

    if (errors.isEmpty()) {
        res.send("Enviando...");
    } else {
        res.render('auth/registro', { layout: 'layout-auth' }, {
            values: req.body,
            errors: errors.array()
        });
    }
})

// CLASE 31 21:44 NO FUNCIONA LA PAGINA DE REGISTRO

router.post('/registro', (req, res) => {
    connection.query('INSERT INTO usuarios SET ?', { email: req.body.email, password: req.body.password }, error => {
        if (error) throw error
        res.redirect('/');
    })
})


module.exports = router;