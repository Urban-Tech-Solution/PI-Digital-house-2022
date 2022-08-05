const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.cadastrar);
router.post('/cadastro', cadastroController.novoCadastro)

module.exports = router;