const form = window.document.querySelector('.login_form');
let estadoBotao = true;

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let dataRaw = {
        email: document.querySelector("input[type='email']").value,
        password: document.querySelector("input[type='password']").value,
        user_type_id: 1
    };

    enviarDados(dataRaw);
});

async function enviarDados(data){
    estadoBotao = statusBotao(estadoBotao);
    const jsonData = JSON.stringify(data);
    const url = "https://go-wash-api.onrender.com/api/login";
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });

    if(response.ok){
        alert("Login realizado com sucesso!")
        window.location.href = "./home.html";
        return;
    }else{
        estadoBotao = statusBotao(estadoBotao);
        alert(`Falha ao realizar login. HTTP ERROR: ${response.status}`);
    }
}

function statusBotao(estado){
    let botao = window.document.querySelector('#botaozinho');
    let load = window.document.querySelector('.loader');

    if(estado){
        botao.style.display = "none";
        load.style.display = "block";
        return false;
    } else {
        botao.style.display = "block";
        load.style.display = "none";
        return true;
    }

};