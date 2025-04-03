const capturaBotao = window.document.querySelector('.botaoCafe');
let estadoBotao = false;

capturaBotao.addEventListener("click", function(event){
    const imagem = window.document.querySelector('.querocafe');
    if (estadoBotao){
        imagem.classList.remove('ativo')
        estadoBotao = false
    } else{
        imagem.classList.add('ativo')
        estadoBotao = true
    }
});
