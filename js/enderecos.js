async function listarEnderecos(url, dadosUsuario) {

    let requisicao = await fetch(url, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${dadosUsuario.access_token}`
        }
    })

    if (requisicao.ok) {
        let resposta = await requisicao.json()
        posicionaEnderecos(resposta.data)
    } else {
        alert(`Falha ao buscar endereços. ERROR: ${requisicao.data}`)
    }

}

function posicionaEnderecos(enderecos) {

    for (let endereco of enderecos) {
        let div = document.createElement('div');
        div.classList.add('endereco');
        div.innerHTML = `
            <input type="hidden" value="${endereco.id}">
            <button>EDITAR</button>
            <button value='${endereco.id}' onClick='excluirEndereco(event)'>EXCLUIR</button>
            <div class="campos">
                <div class="campo">
                    <h3>Título:</h3>
                    <p>${endereco.title}</p>
                </div>
                <div class="campo">
                    <h3>Cep:</h3>
                    <p>${endereco.cep}</p>
                </div>
            </div>
            <div class="campos">
                <div class="campo">
                    <h3>Número:</h3>
                    <p>${endereco.number}</p>
                </div>
                <div class="campo">
                    <h3>Complemento:</h3>
                    <p>${endereco.complement}</p>
                </div>
            </div>
            <div class="campo">
                <h3>Endereço:</h3>
                <p>${endereco.address}</p>
            </div>
        `;
        document.querySelector('#enderecos').appendChild(div);
    }
};

async function excluirEndereco(event) {
    if (confirm('Tem certeza que deseja exlcluir esse endereço?')) {
        const url = 'https://go-wash-api.onrender.com/api/auth/address';
        let resposta = await fetch(`${url}/${event.target.value}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${dadosUsuario.access_token}`
            }
        })
        if (resposta.ok) {
            let response = await resposta.json()
            if (response.data) {
                alert('Endereço excluído com sucesso!')
            }
            window.location.reload()
        } else {
            alert(`Falha ao excluir endereço. ERROR: ${requisicao.data}`)
        }
    }
}


const url = 'https://go-wash-api.onrender.com/api/auth/address';

let dadosUsuarioJSON = localStorage.getItem('userdata');
let dadosUsuario = JSON.parse(dadosUsuarioJSON);

listarEnderecos(url, dadosUsuario);
