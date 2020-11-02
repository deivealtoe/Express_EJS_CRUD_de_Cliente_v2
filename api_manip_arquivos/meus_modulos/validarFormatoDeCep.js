// O formato deve ser XXXXX-XXX

function validarFormatoDeCep(cep) {
    let cep_splited = cep.split('-');

    if (cep === '') {
        return true;
    }

    if (cep.length < 9 || cep.length > 9 || typeof(parseInt(cep_splited[0])) != 'number' || typeof(parseInt(cep_splited[1])) != 'number') {
        return false;
    }

    return true;
}



module.exports = validarFormatoDeCep;