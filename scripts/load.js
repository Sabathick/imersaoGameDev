function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem=loadImage('imagens/personagem/correndo.png');
    imagemInimigo=loadImage('imagens/inimigos/gotinha.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/som_pulo.mp3');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    fita = loadJSON('fita/fita.json')
  }