function mudarcpf(){
    document.getElementById("mudar").placeholder="Insira o seu CPF";
}

function mudarcnpj(){
    document.getElementById("mudar").placeholder="Insira o seu CNPJ";
}

const form = window.document.querySelector('.login_form');

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
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });

    if(response.ok){
        console.log(response.status);
    } else{
        console.log(response.status);
    }
}