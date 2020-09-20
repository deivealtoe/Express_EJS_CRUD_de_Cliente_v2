var express = require('express');
var router = express.Router();
const pegarRegistrosDeClientes = require('../meus_modulos/pegarRegistrosDeClientes');
const salvarNovoClienteNoArquivo = require('../meus_modulos/salvarNovoClienteNoArquivo');
const validarCamposRequeridosEFormatos = require('../middlewares/validarCamposRequeridosEFormatos');



router.get('/', async (request, response, next) => {
    const registros_de_clientes = await pegarRegistrosDeClientes();

    response.render('clientes');
});



router.get('/cadastro', (request, response, next) => {
    response.render('cadastro');
});



router.post('/adicionar_cliente', validarCamposRequeridosEFormatos, async (request, response, next) => {
    const novo_cliente = request.body;

    await salvarNovoClienteNoArquivo(novo_cliente);

    response.status(200).json({ msg: 'Cliente inserido com sucesso!' }).end();
});



module.exports = router;