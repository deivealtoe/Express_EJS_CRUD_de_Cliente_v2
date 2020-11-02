const deletarCliente = require('./deletarCliente');
const salvarNovoClienteNoArquivo = require('./salvarNovoClienteNoArquivo');
const pegarClienteEspecifico = require('./pegarClienteEspecificoPeloId');



async function atualizarDadosDoCliente(novos_dados) {
    const cliente = await pegarClienteEspecifico(novos_dados.id);

    if (cliente.status != 404) {
        await deletarCliente(novos_dados.id);

        await salvarNovoClienteNoArquivo(novos_dados);

        return {
            status: 200,
            msg: "Dados atualizados"
        }
    }
    
    return {
        status: 404,
        msg: "Cliente não encontrado"
    }
}



module.exports = atualizarDadosDoCliente;