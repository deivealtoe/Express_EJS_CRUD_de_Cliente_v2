const fs = require('fs');
const util = require('util');
const pegarRegistrosDeClientes = require('./pegarRegistrosDeClientes');
const pegarCaminhoCompletoDoArquivoClientesJson = require('./pegarCaminhoCompletoDoArquivoClientesJson');
const criarArquivoClientesJsonEmBranco = require('./criarArquivoClientesJsonEmBranco');



const gravar_arquivo = util.promisify(fs.writeFile);



async function adicionarClienteAoArquivo(novo_registro_de_cliente) {
    const registros_de_clientes = await pegarRegistrosDeClientes();

    const cliente_existe = registros_de_clientes.find(element => element.id === novo_registro_de_cliente.id);

    if (cliente_existe) {
        return {
            status: 409,
            msg: "ID já existe"
        }
    }

    registros_de_clientes.push(novo_registro_de_cliente);

    const registros_de_clientes_stringfied = JSON.stringify(registros_de_clientes);

    try {
        await gravar_arquivo(pegarCaminhoCompletoDoArquivoClientesJson(), registros_de_clientes_stringfied);
    } catch (error) {
        if (error.code == 'ENOENT') { // ENOENT == Arquivo ou diretório não encontrado. Com essa função assíncrona o arquivo é criado
            await criarArquivoClientesJsonEmBranco();

            await adicionarClienteAoArquivo(novo_registro_de_cliente);
        }
    }

    return {
        status: 201,
        msg: "Cliente inserido com sucesso!"
    }
}



module.exports = adicionarClienteAoArquivo;