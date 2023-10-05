function tocaSom (seletorAudio) {
    cont elemento = docment.querySelector(seletorAudio);

    if (elemento && elemento.elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        //alert('|elemento não encontrado');
        console.log('Elemento não enontredo ou seletor inválido');
    }
    
}

const listaDeteclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeteclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}'; //template string
}