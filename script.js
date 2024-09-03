function calcular() {
    const f = parseFloat(document.getElementById('foco').value);
    const p = parseFloat(document.getElementById('distancia').value);
    const y = parseFloat(document.getElementById('altura').value);

    let tipoEspelho = '';
    if (f > 0) {
        tipoEspelho = 'Côncavo';
    } else if (f < 0) {
        tipoEspelho = 'Convexo';
    } else {
        tipoEspelho = 'Plano';
    }

    let tipoImagem = '';
    let orientacaoImagem = '';
    let tamanhoImagem = '';
    let alturaImagem = '';

    if (p === f) {
        tipoImagem = 'Imagem imprópria';
        orientacaoImagem = 'N/A';
        tamanhoImagem = 'N/A';
        alturaImagem = 'N/A';
    } else {
        const pl = (f * p) / (p - f);
        const A = -pl / p;
        const yl = Math.abs(A) * y;

        if (pl > 0) {
            tipoImagem = 'Imagem direta (fora do espelho)';
        } else {
            tipoImagem = 'Imagem virtual (dentro do espelho)';
        }

        if (A > 0) {
            orientacaoImagem = 'Imagem direita';
        } else {
            orientacaoImagem = 'Imagem invertida';
        }

        if (yl > y) {
            tamanhoImagem = 'maior';
        } else if (yl < y) {
            tamanhoImagem = 'menor';
        } else {
            tamanhoImagem = 'igual';
        }

        alturaImagem = `${yl} cm`;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Tipo de Espelho: ${tipoEspelho}</p>
        <p>Foco (f): ${f} cm</p>
        <p>Distância do Objeto ao Espelho (p): ${p} cm</p>
        <p>Altura do Objeto (y): ${y} cm</p>
        <p>Tipo de Imagem: ${tipoImagem}</p>
        <p>Orientação da Imagem: ${orientacaoImagem}</p>
        <p>Tamanho da Imagem: ${tamanhoImagem}</p>
        <p>Altura da Imagem: ${alturaImagem}</p>
    `;
}