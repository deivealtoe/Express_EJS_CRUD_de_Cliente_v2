const validarFomartoDeData = require('../meus_modulos/validarFormatoDeData');
const validarFormatoDeCep = require('../meus_modulos/validarFormatoDeCep');



module.exports = (request, response, next) => {
    const novo_cliente = request.body;


    // Validando campos obrigatórios
    if (!novo_cliente.id || !novo_cliente.nome || !novo_cliente.sobrenome || !novo_cliente.senha || !novo_cliente.email) {
        const resposta = {};

        resposta.msg = 'Campos obrigatórios que faltaram preencher: ';

        resposta.msg += novo_cliente.id ? '' : 'ID, ';
        resposta.msg += novo_cliente.nome ? '' : 'NOME, ';
        resposta.msg += novo_cliente.sobrenome ? '' : 'SOBRENOME, ';
        resposta.msg += novo_cliente.senha ? '' : 'SENHA, ';
        resposta.msg += novo_cliente.email ? '' : 'EMAIL';

        console.log(`Requisição de cadastro falhou. ${resposta.msg}`);
        
        return response.status(400).json(resposta).end();
    }


    // Valida o formato de data
    if (!validarFomartoDeData(novo_cliente.data_de_nascimento)) {
        return response.status(400).json({ msg: 'Data com formato inválido. O formato deve ser DD/MM/YYYY' }).end();
    }


    // Valida o formato de CEP
    if (!validarFormatoDeCep(novo_cliente.cep)) {
        return response.status(400).json({ msg: 'CEP com formato inválido. O formato deve ser XXXXX-XXX' }).end();
    }

    
    next();
}