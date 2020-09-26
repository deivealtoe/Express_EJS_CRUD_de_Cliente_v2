function validarSeIdJaExiste(novoId, vetorDeClientes) {

    const encontrado = vetorDeClientes.find((objeto) => {
        if (objeto.id === novoId) {
            return objeto;
        }
    });

    if (encontrado) {
        return true;
    }
    
    return false;
    
}



module.exports = validarSeIdJaExiste;