let naukaisu =new Audio("../Meow.ogg");
function meow(){
    naukaisu.play();
}

window.onload = function(){
    let divs = document.getElementsByTagName("div");
    for(div of divs){
        div.addEventListener("mouseover",meow)
    }
}