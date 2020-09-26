const fs = require('fs');
const util = require('util');
const pegarRegistrosDeClientes = require('./pegarRegistrosDeClientes');
const pegarCaminhoCompletoDoArquivoClientesJson = require('./pegarCaminhoCompletoDoArquivoClientesJson');
const criarArquivoClientesJsonEmBranco = require('./criarArquivoClientesJsonEmBranco');



const gravar_arquivo = util.promisify(fs.writeFile);



async function deletarCliente(id_do_cliente) {
    let registros_de_clientes = await pegarRegistrosDeClientes();

    registros_de_clientes = registros_de_clientes.filter(cadastro => {
        if (cadastro.id != id_do_cliente) {
            return cadastro;
        }
    });

    const registros_de_clientes_stringfied = JSON.stringify(registros_de_clientes);

    try {
        await gravar_arquivo(pegarCaminhoCompletoDoArquivoClientesJson(), registros_de_clientes_stringfied);
    } catch (error) {
        if (error.code == 'ENOENT') { // ENOENT == Arquivo ou diretório não encontrado. Com essa função assíncrona o arquivo é criado
            await criarArquivoClientesJsonEmBranco();

            await deletarCliente(id_do_cliente);
        }
    }
}



module.exports = deletarCliente;