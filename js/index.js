const menu_cafe = document.querySelector('a[href^="#menu"]');
const cafes = document.querySelector('.menu-sec-cafes');
menu_cafe.addEventListener('click', function(event){
    event.preventDefault();

    const idprocurado = this.getAttribute('href'); 
    const elemento = document.querySelector(idprocurado);
      
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 

    });
    
});
