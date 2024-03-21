//generar figuras con canvas

console.log("hola mundo");

window.onload = function () {
    canvas = document.getElementById("canvas");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            // alert("si soporta la etiqueta cavas");
            //definimos colores
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "red";
            ctx.lineWidth = 5;

            //crea rectangulo lleno (x,y (ubicaicon) x.y (tamaño))
            ctx.fillRect(50, 50, 100, 100);

            //crea poligono
            ctx.strokeRect(50, 50, 100, 100);

            //cambiar color relleno
            ctx.fillStyle = "rgba(250,250,0,0.25)";
            ctx.fillRect(200, 50, 100, 100);
            ctx.strokeRect(200, 50, 100, 100);

            //dibujar una linea
            ctx.lineWidth = 5;
            ctx.strokeStyle = "blue";

            //iniciamos el trazo de la linea
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(450, 50);
            ctx.stroke();

            //terminacion para linea
            ctx.lineWidth = 25;
            ctx.strokeStyle = "orange";
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(50, 100);
            ctx.lineTo(450, 100);
            ctx.stroke();

            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.lineCap = "square";
            ctx.moveTo(50, 200);
            ctx.lineTo(450, 200);
            ctx.stroke();

            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.lineCap = "butt";
            ctx.moveTo(50, 300);
            ctx.lineTo(450, 300);
            ctx.stroke();

            //path
            ctx.strokeStyle = "pink";
            ctx.lineWidth = 10;

            ctx.beginPath();
            ctx.moveTo(50, 100);
            ctx.lineTo(100, 50);
            ctx.lineTo(150, 100);
            ctx.lineTo(100, 150);
            ctx.stroke();

            ctx.strokeStyle = "brown";

            ctx.beginPath();
            ctx.moveTo(200, 100);
            ctx.lineTo(250, 50);
            ctx.lineTo(300, 100);
            ctx.lineTo(250, 150);
            ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = "green";

            ctx.beginPath();
            ctx.moveTo(350, 100);
            ctx.lineTo(400, 50);
            ctx.lineTo(450, 100);
            ctx.lineTo(400, 150);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();

            //realizar arcos
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;

            ctx.beginPath();
            ctx.arc(100, 250, 50, 1.1 * Math.PI, 2 * Math.PI, true);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(300, 250, 50, 0, 2 * Math.PI);
            ctx.stroke();
        } else {
            alert("si soporta la etiqueta cavas");
        }
    }

    canvas2 = document.getElementById("canvas2");
    if (canvas2 && canvas.getContext) {
        cty = canvas2.getContext("2d");
        if (cty) {
            cty.lineWidth = "10";
            cty.strokeStyle = "yellow";
            cty.fillStyle = "red";
            cty.beginPath();

            var x1 = 20,
                y1 = 20;
            cty.moveTo(x1, y1);
            cty.quadraticCurveTo(20, 100, 200, 20);
            cty.stroke();

            cty.lineWidth = "10";
            cty.strokeStyle = "red";
            cty.fillStyle = "yellow";
            cty.beginPath();
            cty.moveTo(20, 100);
            cty.bezierCurveTo(60, 200, 600, 100, 200, 300);
            cty.stroke();

            cty.lineWidth = "10";
            cty.strokeStyle = "blue";
            cty.fillStyle = "blue";
            cty.lineCap = "round";
            cty.lineJoin = "round";
            var inicioX = 85;
            var inicioY = 70;
            var desplazmiento = 30;
            var lineas = 15;

            cty.beginPath();
            cty.moveTo(inicioX, inicioY);
            for (var i = 0; i < lineas; i++) {
                var x = inicioX + (i + 1) * desplazmiento;
                var y = inicioY;

                if (i % 2 == 0) {
                    y = inicioY + 100;
                }
                cty.lineTo(x, y);
            }
            cty.stroke();

            let radio = 0,
                angulo = 0;
            cty.strokeStyle = "orange";
            cty.beginPath();
            cty.moveTo(canvas2.width / 2, canvas2.height / 2);

            for (var i = 0; i < 200; i++) {
                radio += 0.75;
                angulo += (Math.PI * 2) / 50;
                var x = canvas2.width / 2 + radio * Math.cos(angulo);
                var y = canvas2.width / 2 + radio * Math.sin(angulo);
                cty.lineTo(x, y);
            }
            cty.stroke();

            var puntas = 10;
            var vertices = puntas * 2;
            var angulo2 = (Math.PI * 2) / vertices;
            var radioInterno = 40;
            var radioExterno = 80;
            var xx = canvas2.width / 2;
            var yy = canvas2.height / 2;
            cty.strokeStyle = "green";
            cty.fillStyle = "red";
            cty.lineWidth = 10;
            cty.beginPath();

            for (var t = 0; t < vertices; t++) {
                var x, y;
                if (t % 2 == 0) {
                    x = Math.cos(angulo2 * t) * radioExterno;
                    y = Math.sin(angulo2 * t) * radioExterno;
                } else {
                    x = Math.cos(angulo2 * t) * radioInterno;
                    y = Math.sin(angulo2 * t) * radioInterno;
                }
                cty.lineTo(xx + x, yy + y);
            }
            cty.closePath();
            cty.fill();
            cty.stroke();
        }
    }
};
