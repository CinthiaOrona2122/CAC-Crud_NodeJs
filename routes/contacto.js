 const express = require("express");
 const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get("/contacto", (req,res) => {
    res.render("contacto/index", {values : {}});
})

router.post("/contacto", [
    body('nombre', 'El nombre es requerido, y tiene mas de 3 caracteres').exists().isLength(3),
    body('email', 'El email es requerido y tiene que ser valido').exists().isEmail().normalizeEmail(),
    body('mensaje', 'El mensaje es requerido').exists().trim().notEmpty().escape()
],(req,res) => {

    const errors = validationResult(req);
    // console.log(req.body, errors);

    if(errors.isEmpty()){
    res.send("Enviando..."); 
    }else{
        res.render("contacto/index", {
            values: req.body, 
            errors: errors.array()
        });
    }
})
 
 module.exports = router;