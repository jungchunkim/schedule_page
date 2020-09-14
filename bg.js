const body = document.querySelector("body");

const IMG_NUMBER=5;


function paintImage(imgNumber){
    const image= new Image();
    image.src=`Images/${imgNumber}.jpg`
    image.classList.add('bgImage')
    body.appendChild(image);
}

function genRandom()
{
    //Math 모듈 사용!
    const number = Math.floor(Math.random()*5+1);
    return number;
}

function init(){
    const randomNumber= genRandom();
    paintImage(randomNumber);
}

init();