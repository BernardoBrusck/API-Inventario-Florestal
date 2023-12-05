const qrCodeButton = document.getElementById('qrCodeButton');
const ifc = document.getElementById('ifc')
const rotas_manipulacao = document.getElementById('rotas_manipulacao')

const link_yt = 'https://www.youtube.com/watch?v=aZ4BXi2nCZQ&t=7s';
const link_ifc = 'http://www.camboriu.ifc.edu.br/';

qrCodeButton.addEventListener('click', function () {
    window.open(link_yt, '_blank');
});

ifc.addEventListener('click', function () {
    window.open(link_ifc, '_blank');
});

rotas_manipulacao.addEventListener('click', function () {
    alert("Ainda está em desenvolvimento...");
});

document.getElementById('descricao').addEventListener('click', function () {
    const descricaoSection = document.getElementById('descricao-section');
    if (descricaoSection) {
        descricaoSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
});