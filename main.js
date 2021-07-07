canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

bluecar_width=75;
bluecar_height=100;
bluecar_x=5;
bluecar_y=225;

background_img= "Backgroundimg.jpg";
bluecar="Bluecarimage.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src= background_img;

    bluecar_imgTag = new Image();
    bluecar_imgTag.onload = uploadbluecar;
    bluecar_imgTag.src= bluecar;

}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadbluecar(){
    ctx.drawImage(bluecar_imgTag, bluecar_x, bluecar_y, bluecar_width, bluecar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed =="38"){
    up();
    console.log("up key is pressed");

}

if(keypressed == '40'){
    down();
    console.log("down key is pressed");

}

if(keypressed =="37"){
    Left();
    console.log("left key is pressed");
}

if(keypressed =="39"){
    right();
    console.log("right key is pressed");
}

}

function up(){
    if(bluecar_y>=0){

    bluecar_y = bluecar_y-10;
    uploadbackground();
    uploadbluecar();
    }
}


function down(){

    if(bluecar_y<=500){
    bluecar_y = bluecar_y+10;
    uploadbackground();
    uploadbluecar();
    }
}

function Left(){
    if(bluecar_x>=0){
        bluecar_x = bluecar_x-10;
        uploadbackground();
        uploadbluecar();
    }
}

function right(){
    if(bluecar_x<=700){
        bluecar_x=bluecar_x+10;
        uploadbackground();
        uploadbluecar();
    }
}
