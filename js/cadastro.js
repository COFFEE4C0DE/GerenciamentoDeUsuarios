function mudarcpf(){
    document.getElementById("mudar").placeholder="Insira o seu CPF";
}

function mudarcnpj(){
    document.getElementById("mudar").placeholder="Insira o seu CNPJ";
}

const form = window.document.querySelector(".cadastro_form");
let estadoBotao = true;

form.addEventListener('submit', function(event){
    event.preventDefault();

    let dataRaw = {
        name: document.querySelector("#name").value,
        user_type_id: 1,
        cpf_cnpj: document.querySelector("#mudar").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        birthday: document.querySelector("#data").value,
        terms: 1,
    }

    enviarDados(dataRaw);
});

async function enviarDados(data){
    let jsonData = JSON.stringify(data);
    let url = "https://go-wash-api.onrender.com/api/user";
    let response =  await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: jsonData,
    });

    if(response.ok){
        estadoBotao = statusBotao(estadoBotao);
        let result = await response.json()
        alert("Cadastro realizado com sucesso!")
        window.location.href = "./login.html";
    }else{
        estadoBotao = statusBotao(estadoBotao);
        console.log(response.status);
    }
};

function statusBotao(estado){
    let botao = window.document.querySelector('#botaozinho');

    if(estado){
        botao.setAttribute("disabled", "disabled");
        return false;
    } else {
        botao.removeAttribute("disabled");
        return true;
    }

};