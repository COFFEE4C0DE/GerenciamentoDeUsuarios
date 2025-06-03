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
            <button value='${endereco.id}' onClick='abrePopup(event)'>EDITAR</button>
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

function verificarNull(valor){
    return valor == null ? '' : valor;
}

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

async function enviarDados(event){
    event.preventDefault()        
    let endereco = {
        title: document.querySelector('#titleAdicionar').value,
        cep: document.querySelector('#cepAdicionar').value,
        address: document.querySelector('#endAdicionar').value,
        number: document.querySelector('#numeroAdicionar').value,
        complement: document.querySelector('#complementAdicionar').value
    }

    console.log(endereco)

    let resposta = await fetch(url, {
        method: 'post',
        headers: { 
            Authorization: `Bearer ${dadosUsuario.access_token}`,
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(endereco)
    }
    )
    if (resposta.ok) {
        alert('Endereço criado com sucesso!')
        window.location.reload()
    } else {
        alert('Endereço inválido.')
        console.log(toString(resposta.errors))
    }
}

function abrePopup(event) {
    document.querySelector("#enviar").value = event.target.value;
    document.querySelector('#IdPopup').style.display = 'flex';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });

    document.querySelector('body').style.overflow = 'hidden';
}   

function fechaPopup() {
    document.querySelector('#IdPopup').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
} 

async function atualizarDados(event){
    event.preventDefault();
    const url = 'https://go-wash-api.onrender.com/api/auth/address';
    
    let dadosEndereco =  {
        title:document.querySelector('#title').value,
        cep: document.querySelector('#cep').value,
        address: document.querySelector('#end').value,
        number: document.querySelector('#numero').value,
        complement: document.querySelector('#complement').value
    }

    let resposta = await fetch(`${url}/${event.target.value}`, {
        method: 'post',
        headers: {
            Authorization: `Bearer ${dadosUsuario.access_token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosEndereco)
    })

    if (resposta.ok) {
        alert('Endereço alterado com sucesso!')
        window.location.reload()
     } else {
        alert('Endereço inválido.')
    }

}

const toggleButton = document.getElementById('toggleButton');
const formContainer = document.getElementById('formContainer');   

toggleButton.addEventListener('click', function() {
    console.log(formContainer)
    formContainer.classList.toggle('show');
});