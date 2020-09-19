var express = require('express');
var router = express.Router();
const pegarRegistrosDeClientes = require('../meus_modulos/pegarRegistrosDeClientes');
const salvarNovoClienteNoArquivo = require('../meus_modulos/salvarNovoClienteNoArquivo');



router.get('/', async (request, response, next) => {
    const registros_de_clientes = await pegarRegistrosDeClientes();

    //response.json(registros_de_clientes);
    response.render('clientes');
});



router.post('/adicionar_cliente', async (request, response, next) => {
    const novo_cliente = {
        "Id": 2,
        "Nome": "cliente",
        "Sobrenome": "qualquer",
        "Senha": "456",
        "E-mail": "cliente@ucl.br",
        "Sexo": "F",
        "CPF": "",
        "RG": "",
        "Telefone": "987654321",
        "DataNascimento": "",
        "EstadoCivil": 1,
        "CEP": "",
        "Endereco": ""
    }

    await salvarNovoClienteNoArquivo(novo_cliente);

    response.status(200).end();
});



module.exports = router;