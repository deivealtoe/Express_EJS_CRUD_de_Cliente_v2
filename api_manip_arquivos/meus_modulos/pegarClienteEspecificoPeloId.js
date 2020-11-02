const pegarRegistrosDeClientes = require('./pegarRegistrosDeClientes');



async function pegarClienteEspecificoPeloId(cliente_id) {
    const registros = await pegarRegistrosDeClientes();

    const cliente_especifico = registros.find(elemento => elemento.id == cliente_id);

    if (cliente_especifico) {
        return {
            status: 200,
            msg: "Cliente encontrado",
            cliente: cliente_especifico
        }
    }

    return {
        status: 404,
        msg: "Cliente não encontrado"
    }
}



module.exports = pegarClienteEspecificoPeloId;