const fs = require('fs');
const util = require('util');
const criarArquivoClientesJsonEmBranco = require('./criarArquivoClientesJsonEmBranco');
const pegarCaminhoCompletoDoArquivoClientesJson = require('./pegarCaminhoCompletoDoArquivoClientesJson');



const ler_arquivo = util.promisify(fs.readFile);



async function pegarRegistrosDeClientes() {
    try {
        let registros = await ler_arquivo(pegarCaminhoCompletoDoArquivoClientesJson());

        registros = JSON.parse(registros);

        return registros;
    } catch (error) {
        if (error.code == 'ENOENT') { // ENOENT == Arquivo ou diretório não encontrado. Com essa função assíncrona o arquivo é criado
            await criarArquivoClientesJsonEmBranco();

            return pegarRegistrosDeClientes();
        } else {
            console.log(error);
        }
    }
}



module.exports = pegarRegistrosDeClientes;