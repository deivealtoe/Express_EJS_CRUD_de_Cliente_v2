const fs = require('fs');
const util = require('util');
const pegarCaminhoCompletoDoArquivoClientesJson = require('./pegarCaminhoCompletoDoArquivoClientesJson');



/* O método fs.writeFile() substitui o arquivo especificado e seu conteúdi se ele existir.
   Se o  arquivo não existir, um novo arquivo contendo o conteúdo especificado será criado */
const criar_arquivo = util.promisify(fs.writeFile);



async function criarArquivoClientesJsonEmBranco() {
    try {
        await criar_arquivo(pegarCaminhoCompletoDoArquivoClientesJson(), '[]');

        console.log('Arquivo não encontrado. Um novo foi criado.');
        console.log('Caminho completo: ' + pegarCaminhoCompletoDoArquivoClientesJson());
    } catch (error) {
        console.log(error);
    }
}



module.exports = criarArquivoClientesJsonEmBranco;