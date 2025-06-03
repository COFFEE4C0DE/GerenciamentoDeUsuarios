const _infoCafes = [
    {
        nome: "Aurora da Serra",
        preco: "R$30",
        peso: "250g",
        tipo: "Arábica",
        descricao: "Intenso e marcante, o Aurora da Serra é perfeito pra quem gosta de um café encorpado e com notas profundas. Cultivado na Fazenda Marajó em Minas Gerais, entrega um sabor achocolatado com toque leve de caramelo queimado. Ideal para começar o dia com força e energia.",
        notas: "Chocolate amargo, caramelo e noz-pecã.",
    },
    {
        nome: "Raízes do Cerrado",
        preco: "R$60",
        peso: "250g",
        tipo: "Arábica",
        descricao: "O Raízes do Cerrado carrega o terroar do interior: um café robusto, com acidez baixa e finalização longa e aveludada. A torra mais escura realça seu corpo denso e seu aroma amendoado. Um convite a pausas sem pressa.",
        notas: "Amêndoas tostadas, cacau e melaço.",
    },
    {
        nome: "Brisa do Vale",
        preco: "R$45",
        peso: "250g", 
        tipo: "Canephora",
        descricao: "Leve, suave e doce. O Brisa do Vale é aquele café delicado que abraça. Feito para quem curte cafés claros e aromáticos, com acidez cítrica equilibrada e final refrescante. Perfeito para métodos filtrados como V60 e Chemex.",
        notas: "Mel, frutas amarelas e chá branco.",
    },
]

const elementosHTML = {
    nome: document.querySelector("#nome"), 
    preco: document.querySelector("#preco"),
    peso: document.querySelector("#peso"),
    tipo: document.querySelector("#tipo"),
    descricao: document.querySelector("#descricao"), 
    notas: document.querySelector("#notas"), 
}

let contador = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.cafe').length;

function moveSlide(n){
    contador += n;

    if (contador >= totalSlides) {
        contador = 0;
    } else if (contador < 0) {
        contador = totalSlides - 1;
    }

    elementosHTML.nome.innerHTML = _infoCafes[contador].nome;
    elementosHTML.preco.innerHTML = _infoCafes[contador].preco;
    elementosHTML.peso.innerHTML = _infoCafes[contador].peso;
    elementosHTML.tipo.innerHTML = _infoCafes[contador].tipo;
    elementosHTML.descricao.innerHTML = _infoCafes[contador].descricao;
    elementosHTML.notas.innerHTML = _infoCafes[contador].notas;

    slides.style.transform = `translateX(${-contador * 205}%)`;
};

