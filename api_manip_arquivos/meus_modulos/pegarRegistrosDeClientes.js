const fs = require('fs');
const util = require('util');
const criarArquivoClientesJsonEmBranco = require('./criarArquivoClientesJsonEmBranco');
const pegarCaminhoCompletoDoArquivoClientesJson = require('./pegarCaminhoCompletoDoArquivoClientesJson');



const ler_arquivo = util.promisify(fs.readFile);



async function pegarRegistrosDeClientes() {
    try {
        let registros = await ler_arquivo(pegarCaminhoCompletoDoArquivoClientesJson());

        registros = JSON.parse(registros);

        registros = registros.map((registro) => {
            if (registro.estado_civil == 1) {
                registro.estado_civil = 'Solteiro';
            } else if (registro.estado_civil == 2) {
                registro.estado_civil = 'Casado';
            } else if (registro.estado_civil == 3) {
                registro.estado_civil = 'Divorciado';
            } else if (registro.estado_civil == 4) {
                registro.estado_civil = 'Viúvo';
            } else if (registro.estado_civil == 5) {
                registro.estado_civil = 'Separado';
            }

            return registro;
        });

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