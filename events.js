var d = document.getElementById("drawing");
var board = d.getContext("2d");
var backNone = document.getElementById("buttNone");
var backPepe = document.getElementById("buttPepe");
var backMain = document.getElementById("buttMain");
var backDew = document.getElementById("buttDew");
var backWall = document.getElementById("buttWall");
var buttCol = document.getElementById("cambCol");
var colText = document.getElementById("txtCol");
var linCol = document.getElementById("txtLinCol");
var newMov = document.getElementById("txtMov");

colText.addEventListener("keydown",function (e){ //Function to know if "Enter" key was pressed
    console.log(e);
    if (e.keyCode == 13){
        nueCol();
    }        
});

document.addEventListener("keydown",drawKeyboard);
drawLine("blue", x - 1, y - 1, x + 1, y + 1);

var keys = { //Key index in the browser for every ArrowKey
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//#region Listeners
backNone.addEventListener("click",backToNone);
backPepe.addEventListener("click",backToPepe);
backMain.addEventListener("click",backToMaincra);
backDew.addEventListener("click",backToDew);
backWall.addEventListener("click",backToWall);
buttCol.addEventListener("click",nueCol);
//#endregion

//#region BasicNavigation
function backToNone(){
    document.getElementById("drawing").style.backgroundImage = "";
}

function backToPepe(){
    document.getElementById("drawing").style.backgroundImage = "url('https://cdn.aliyum.51wnl.com/cover/201705/1494269649869.jpeg')";    
}

function backToMaincra(){
    document.getElementById("drawing").style.backgroundImage = "url('https://i.ytimg.com/vi/gV6P9UGLL3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLChalpFFo9db2qVSQsm4s7EIPRw1w')";
}

function backToDew(){
    document.getElementById("drawing").style.backgroundImage = "url('https://pics.me.me/dew-it-14125047.png')";
}

function backToWall(){
    document.getElementById("drawing").style.backgroundImage = "url('https://static1.fjcdn.com/comments/This+is+the+only+thing+out+of+days+worth+of+_cac9760380859926e3148644b765d0dc.jpg')";
}

function nueCol(){
        document.getElementById("drawing").style.backgroundColor = colText.value;
}

//#endregion

//#region DrawingProcess
var movement = 10;
var initCol = "#76ff03";

var x = 150, y = 100;

function drawKeyboard(evento){
    
    console.log(evento);
    switch (evento.keyCode) {
        case keys.UP:
            drawLine(initCol,x,y,x, y - movement);
            y -= movement;
            break;
        case keys.DOWN:
            drawLine(initCol,x,y,x, y + movement);
            y += movement;
            break;
        case keys.LEFT:
            drawLine(initCol,x,y, x - movement, y);
            x -= movement;
            break;
        case keys.RIGHT:
            drawLine(initCol,x,y,x + movement, y);
            x +=movement;
            break;
        default:
            break;
    }
}

var estado = 0;          // estado del click      
var colorLinea = "blue";    // color a la linea
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    drawLine(colorLinea, x, y, evento.layerX, evento.layerY);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function drawLine(color, x1, y1, x2, y2){
    board.beginPath();
    board.strokeStyle = color;
    board.strokeWidth = 15;
    board.moveTo(x1,y1);
    board.lineTo(x2,y2);
    board.stroke();
    board.closePath();
}
//#endregion