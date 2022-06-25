canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastPostionOfX, lastPostionOfY;
var color="red";
var widthofline=30;

canvas.addEventListener("mouseDown", mymousedown);

function mymousedown(e){
    mouseEvent="mouseDown";

}

canvas.addEventListener("mouseUp", mymouseUp);

function mymouseUp(e){
    mouseEvent="mouseUp";

}

canvas.addEventListener("mouseLeave", mymouseLeave);

function mymouseLeave(e){
    mouseEvent="mouseLeave";

}
canvas.addEventListener("mouseMove", mymouseMove);

function mymouseMove(e){
    var current_pos_x=e.clientX-canvas.offsetLeft;
    var current_pos_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=widthofLine;
        ctx.moveTo(lastPostionOfX, lastPostionOfY);
        ctx.arc(current_pos_x, current_pos_y, 40, 0, 2 * Math.PI);
        ctx.stroke();
        console.log("last Position of x=" +lastPostionOfX+",last Postion of y=" +lastPostionOfY);
        console.log("current Postion of x" +current_pos_x+",current postion of y=" +current_pos_y);
    }
    lastPostionOfX=current_pos_x;
    lastPostionOfY=current_pos_y;



}



