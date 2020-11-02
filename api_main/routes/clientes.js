var express = require('express');
var router = express.Router();
const axios = require('axios');
/*
Para futuras referências
https://github.com/axios/axios#installing
https://stackoverflow.com/questions/49967779/axios-handling-errors
https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/
*/



router.get('/', async (request, response, next) => {
    let resp;

    try {
        resp = await axios.get('http://127.0.0.1:3001/arquivo/pegar_registros');
    } catch (err) {
        console.error(err);
    }

    return response.render('clientes', { clientes: resp.data });
});



router.get('/cadastro', (request, response, next) => {
    response.render('cadastro');
});



router.get('/deletar_cliente/:id', async (request, response, next) => {
    let resp;

    try {
        resp = await axios.get(`http://127.0.0.1:3001/arquivo/deletar_cliente/${request.params.id}`);
    } catch (err) {
        console.error(err);
    }

    return response.redirect('/clientes');
});



router.get('/cadastro/editar/:id', async (request, response, next) => {
    let resp;

    try {
        resp = await axios.get(`http://127.0.0.1:3001/arquivo/pegar_cliente_especifico/${request.params.id}`);
    } catch (err) {
        console.error(err);
    }

    return response.render('cadastro', { cliente_especifico: resp.data.resposta.cliente });
});



router.put('/alterar_cliente', async (request, response, next) => {
    try {
        const resp = await axios.put('http://127.0.0.1:3001/arquivo/alterar_cliente', request.body);

        return response.status(resp.status).json({ msg: resp.data.msg }).end();
    } catch (err) {
        return response.status(err.response.status).json({ msg: err.response.data.msg }).end();
    }
});



router.post('/adicionar_cliente', async (request, response, next) => {
    try {
        const resp = await axios.post('http://127.0.0.1:3001/arquivo/adicionar_cliente', request.body);

        return response.status(resp.status).json({ msg: resp.data.msg }).end();
    } catch (err) {
        return response.status(err.response.status).json({ msg: err.response.data.msg }).end();
    }
});



module.exports = router;