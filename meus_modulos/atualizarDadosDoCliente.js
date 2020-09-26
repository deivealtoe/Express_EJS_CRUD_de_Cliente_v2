const deletarCliente = require('./deletarCliente');
const salvarNovoClienteNoArquivo = require('./salvarNovoClienteNoArquivo');



async function atualizarDadosDoCliente(novos_dados) {
    await deletarCliente(novos_dados.id);

    await salvarNovoClienteNoArquivo(novos_dados);
}



module.exports = atualizarDadosDoCliente;