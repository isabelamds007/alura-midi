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
