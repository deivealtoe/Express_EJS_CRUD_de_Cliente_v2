const path = require('path');



function pegarCaminhoCompletoDoArquivoClientesJson() {
    return path.join(__dirname, '..', 'bin', 'clientes.json');
}



module.exports = pegarCaminhoCompletoDoArquivoClientesJson;