function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  somDoJogo.loop();
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial 
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar',);
}

function keyPressed(){
 jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
