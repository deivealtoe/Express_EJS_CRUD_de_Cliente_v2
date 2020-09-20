// O formato deve ser DD/MM/YYYY

function validarFomartoDeData(data) {
    let data_splited = data.split('/');

    if (data === '') {
        return true;
    }

    if (data.length < 10 || data.length > 10 || data_splited.length < 3 || data_splited > 3 || typeof(parseInt(data_splited[0])) != 'number' || typeof(parseInt(data_splited[1])) != 'number' || typeof(parseInt(data_splited[2])) != 'number') {
        return false;
    }

    return true;
}



module.exports = validarFomartoDeData;