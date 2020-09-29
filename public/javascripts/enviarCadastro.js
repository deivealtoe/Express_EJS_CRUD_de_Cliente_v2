function pegarDadosDoFormulario() {
    const cadastro = {};

    cadastro.id = document.getElementById('id').value;
    cadastro.nome = document.getElementById('nome').value;
    cadastro.sobrenome = document.getElementById('sobrenome').value;
    cadastro.senha = document.getElementById('senha').value;
    cadastro.email = document.getElementById('email').value;
    cadastro.sexo = document.getElementById('sexo').value;
    cadastro.cpf = document.getElementById('cpf').value;
    cadastro.rg = document.getElementById('rg').value;
    cadastro.telefone = document.getElementById('telefone').value;
    cadastro.data_de_nascimento = document.getElementById('data_de_nascimento').value;
    cadastro.estado_civil = document.getElementById('estado_civil').value;
    cadastro.cep = document.getElementById('cep').value;
    cadastro.endereco = document.getElementById('endereco').value;

    return cadastro;
}



async function enviarCadastro() {
    const cadastro = pegarDadosDoFormulario();

    const response = await fetch('http://127.0.0.1:3000/clientes/adicionar_cliente', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cadastro)
    });

    if (response.status === 200) {
        window.location.href = '/clientes'
    }

    const responseJson = await response.json();

    alert(responseJson.msg);
}



document.getElementById('cadastrar').addEventListener('click', () => {
    enviarCadastro();
});