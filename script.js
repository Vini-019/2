function choose(option) {
    let story = document.getElementById('story');
    let choices = document.getElementById('choices');

    if (option === 'rio') {
        story.innerHTML = "Você começa sua jornada no Rio de Janeiro, subindo o Pico da Tijuca ao amanhecer para encontrar a primeira pista. Durante a subida, você se depara com dois caminhos...";
        choices.innerHTML = `
            <button onclick="choose('pico')">Procurar a pista no topo do pico</button>
            <button onclick="choose('casa')">Desistir e voltar para casa</button>
        `;
    } else if (option === 'pernambuco') {
        story.innerHTML = "Você decide seguir para Pernambuco, onde dizem que o sol nasce primeiro. Chegando lá, você encontra uma praia deserta com um velho pescador que parece saber mais do que aparenta...";
        choices.innerHTML = `
            <button onclick="choose('falar')">Falar com o pescador</button>
            <button onclick="choose('ignorar')">Ignorar e seguir em frente</button>
        `;
    } else if (option === 'pico') {
        story.innerHTML = "No topo do pico, você encontra uma antiga inscrição gravada em uma pedra. Ela parece indicar um local específico, mas você precisa decifrá-la...";
        choices.innerHTML = `
            <button onclick="choose('decifrar')">Tentar decifrar a inscrição</button>
            <button onclick="choose('descer')">Descer sem tentar decifrar</button>
        `;
    } else if (option === 'casa') {
        story.innerHTML = "Você decide que essa aventura não é para você e volta para casa. Talvez em outra oportunidade...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (option === 'falar') {
        story.innerHTML = "O pescador conta uma história antiga sobre uma caverna escondida na floresta próxima. Ele oferece a você um mapa para encontrá-la...";
        choices.innerHTML = `
            <button onclick="choose('aceitar')">Aceitar o mapa</button>
            <button onclick="choose('recusar')">Recusar a oferta</button>
        `;
    } else if (option === 'ignorar') {
        story.innerHTML = "Você ignora o pescador e continua caminhando pela praia, mas sem a orientação dele, acaba se perdendo...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (option === 'decifrar') {
        story.innerHTML = "Você decifra a inscrição e descobre que ela leva a um local secreto. A aventura continua...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (option === 'descer') {
        story.innerHTML = "Você desce o pico sem decifrar a inscrição. Talvez você tenha perdido uma pista importante...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (option === 'aceitar') {
        story.innerHTML = "Com o mapa em mãos, você segue em direção à caverna. A aventura continua...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (option === 'recusar') {
        story.innerHTML = "Você recusa a oferta do pescador e segue seu caminho sozinho. Infelizmente, você não encontra nada além de areia e mar...";
        choices.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    }
}

function restart() {
    location.reload();
}
