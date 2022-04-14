let keysForPlay = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", 
"KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
document.addEventListener("keydown", function(event){
    if (keysForPlay.includes(event.code)){
        new Audio(`audio/${event.key}.ogg`).play();
        }
    });

A.onclick =() => new Audio(`audio/a.ogg`).play();
S.onclick =() => new Audio(`audio/s.ogg`).play();
D.onclick =() => new Audio(`audio/d.ogg`).play();
F.onclick =() => new Audio(`audio/f.ogg`).play();
G.onclick =() => new Audio(`audio/g.ogg`).play();
H.onclick =() => new Audio(`audio/h.ogg`).play();
J.onclick =() => new Audio(`audio/j.ogg`).play();
