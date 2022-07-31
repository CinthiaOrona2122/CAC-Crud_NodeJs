const express = require("express");
const router = express.Router();

const controller = require('../controllers');

router.get('/productos', controller.index);

router.get('/productos/create', controller.create);

router.post('/productos/store', controller.store);

router.get('/productos/:id', controller.show);

router.get('/productos/:id/edit', controller.edit);

module.exports = router;