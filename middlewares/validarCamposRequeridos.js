module.exports = (request, response, next) => {
    const novo_cliente = request.body;

    if (!novo_cliente.id || !novo_cliente.nome || !novo_cliente.sobrenome || !novo_cliente.senha || !novo_cliente.email) {
        const resposta = {};

        resposta.msg = 'Campos que faltam preencher: ';

        resposta.msg += novo_cliente.id ? '' : 'ID, ';
        resposta.msg += novo_cliente.nome ? '' : 'NOME, ';
        resposta.msg += novo_cliente.sobrenome ? '' : 'SOBRENOME, ';
        resposta.msg += novo_cliente.senha ? '' : 'SENHA, ';
        resposta.msg += novo_cliente.email ? '' : 'EMAIL';

        console.log(resposta);
        
        response.status(400).json(resposta).end();
    }
    
    next();
}