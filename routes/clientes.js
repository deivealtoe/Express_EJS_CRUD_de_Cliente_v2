var express = require('express');
var router = express.Router();
const pegarRegistrosDeClientes = require('../meus_modulos/pegarRegistrosDeClientes');
const salvarNovoClienteNoArquivo = require('../meus_modulos/salvarNovoClienteNoArquivo');
const validarCamposRequeridosEFormatos = require('../middlewares/validarCamposRequeridosEFormatos');
const deletarCliente = require('../meus_modulos/deletarCliente');
const pegarClienteEspecificoPeloId = require('../meus_modulos/pegarClienteEspecificoPeloId');
const atualizarDadosDoCliente = require('../meus_modulos/atualizarDadosDoCliente');



router.get('/', async (request, response, next) => {
    const registros_de_clientes = await pegarRegistrosDeClientes();

    response.render('clientes', { clientes: registros_de_clientes });
});



router.get('/cadastro', (request, response, next) => {
    response.render('cadastro');
});



router.get('/deletar_cliente/:id', async (request, response, next) => {
    await deletarCliente(request.params.id);

    response.redirect('/clientes');
});



router.get('/cadastro/editar/:id', async (request, response, next) => {
    const cliente_especifico = await pegarClienteEspecificoPeloId(request.params.id);

    response.render('cadastro', { cliente_especifico });
});



router.put('/alterar_cliente', validarCamposRequeridosEFormatos, async (request, response, next) => {
    await atualizarDadosDoCliente(request.body);

    response.status(200).json({ msg: 'Dados atualizados com sucesso!' }).end();
});



router.post('/adicionar_cliente', validarCamposRequeridosEFormatos, async (request, response, next) => {
    const novo_cliente = request.body;

    await salvarNovoClienteNoArquivo(novo_cliente);

    response.status(200).json({ msg: 'Cliente inserido com sucesso!' }).end();
});



module.exports = router;