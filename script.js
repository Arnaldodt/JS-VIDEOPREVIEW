console.log("page loaded...");

let play = false;
let mute = true;
function silencio(element)
{
    if (!play){
        play=true;
        reproducir(element);
    }
    if (mute){
        element.muted=false;
        mute = false;
    }else{
        element.muted=true;
        mute = true;
    }
    
}
function reproducir(element)
{
    if (play){
        element.play();
        element.muted=mute;
    }
}
function detener(element){
    if (play){
        element.pause();
    }
}