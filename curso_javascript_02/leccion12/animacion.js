console.log("hola a todos");

const game = {
    ctx: null,
    canvas: null,
    radio: 10,
    bolaX: 300,
    bolaY: 200,
    colorBola: "red",
    dx: 10,
    dy: 5,
    limiteDerecha: 0,
    limiteIzquierda: 0,
    limiteArriba: 0,
    limiteAbajo: 0,
};

window.onload = function () {
    console.log("onload");
    game.canvas = document.getElementById("canvas");
    if (canvas && canvas.getContext) {
        console.log("contex");
        game.ctx = canvas.getContext("2d");
        if (game.ctx) {
            inicio();
            mueve();
            setInterval(mueve, 60);
        } else {
            alert("no soporta canvas");
        }
    }
};

const inicio = () => {
    game.ctx.lineWidt = game.radio;
    game.ctx.fillStyle = game.colorBola;

    //limites
    game.limiteDerecha = game.canvas.width - game.radio;
    game.limiteIzquierda = game.radio;
    game.limiteAbajo = game.canvas.height - game.radio;
    game.limiteArriba = game.radio;
};

const mueve = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    verificar();
    //console.log("test");
    game.bolaX += game.dx;
    game.bolaY += game.dy;
    game.ctx.beginPath();
    game.ctx.arc(game.bolaX, game.bolaY, game.radio, 0, 2 * Math.PI, true);
    game.ctx.fill();
};

const verificar = () => {
    let nbolaX = game.bolaX + game.dx;
    let nbolaY = game.bolaY + game.dy;
    //limite horizontal
    if (nbolaX > game.limiteDerecha) {
        game.dx *= -1;
        nbolaX = game.limiteDerecha;
    }
    if (nbolaX < game.limiteIzquierda) {
        game.dx *= -1;
        nbolaX = game.limiteIzquierda;
    }
    game.bolaX = nbolaX;

    //limite vertical
    if (nbolaY < game.limiteArriba) {
        game.dy *= -1;
        nbolaY = game.limiteArriba;
    }
    if (nbolaY > game.limiteAbajo) {
        game.dy *= -1;
        nbolaY = game.limiteAbajo;
    }
    game.bolaY = nbolaY;
};
