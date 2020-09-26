const pegarRegistrosDeClientes = require('./pegarRegistrosDeClientes');



async function pegarClienteEspecificoPeloId(cliente_id) {
    const registros = await pegarRegistrosDeClientes();

    const cliente_especifico = registros.find(elemento => elemento.id == cliente_id);

    return cliente_especifico;
}



module.exports = pegarClienteEspecificoPeloId;