function trocarEscala(secao) {
    const titulo = document.getElementById('tituloEscala');
    const imagem = document.getElementById('imagemPrincipal');
    const imagemZoom = document.getElementById('imagemZoom');

    const titulos = {
        1: 'Escala de Sobreaviso',
        2: 'Escala de Sgt de Dia',
        3: 'Escala de Cmt da Guarda'
    };

    const imagens = {
        1: '/assets/images/previsao_sobreaviso.png',
        2: '/assets/images/previsao_sgt_dia.png',
        3: '/assets/images/previsao_cmt_gda.png'
    };

    titulo.innerHTML = `
    <img src="/assets/images/logo11bia.png" alt="Ícone"> ${titulos[secao]}
  `;
    imagem.src = imagens[secao];
    imagemZoom.src = imagens[secao]; // <== ESSENCIAL PARA O ZOOM FUNCIONAR CORRETAMENTE
}
