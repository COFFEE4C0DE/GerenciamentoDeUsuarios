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
        estadoBotao = statusBotao(estadoBotao);
        alert("Login realizado com sucesso!")
        window.location.href = "./cadastro.html";
    }else{
        estadoBotao = statusBotao(estadoBotao);
        console.log(response.status);
    }
}


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