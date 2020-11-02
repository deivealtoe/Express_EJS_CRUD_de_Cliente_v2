var express = require('express');
var router = express.Router();
const pegarRegistrosDeClientes = require('../meus_modulos/pegarRegistrosDeClientes');
const salvarNovoClienteNoArquivo = require('../meus_modulos/salvarNovoClienteNoArquivo');
const deletarCliente = require('../meus_modulos/deletarCliente');
const pegarClienteEspecificoPeloId = require('../meus_modulos/pegarClienteEspecificoPeloId');
const atualizarDadosDoCliente = require('../meus_modulos/atualizarDadosDoCliente');
const validarCamposRequeridosEFormatos = require('../middlewares/validarCamposRequeridosEFormatos');



router.get('/pegar_registros', async (request, response, next) => {
    const registros_de_clientes = await pegarRegistrosDeClientes();

    if (registros_de_clientes.length === 0) {
        return response.status(204).end();
    }

    return response.status(200).json( registros_de_clientes ).end();
});



router.post('/adicionar_cliente', validarCamposRequeridosEFormatos, async (request, response, next) => {
    const novo_cliente = request.body;

    const resposta = await salvarNovoClienteNoArquivo(novo_cliente);

    return response.status(resposta.status).json({ msg: resposta.msg }).end();
});



router.get('/pegar_cliente_especifico/:id', async (request, response, next) => {
    const resposta = await pegarClienteEspecificoPeloId(request.params.id);

    return response.status(resposta.status).json({ resposta }).end();
});



router.get('/deletar_cliente/:id', async (request, response, next) => {
    const resposta = await deletarCliente(request.params.id);

    return response.status(resposta.status).json({ msg: resposta.msg }).end();
});



router.put('/alterar_cliente', validarCamposRequeridosEFormatos, async (request, response, next) => {
    const resposta = await atualizarDadosDoCliente(request.body);

    return response.status(resposta.status).json({ msg: resposta.msg }).end();
});



module.exports = router;