const modelView = document.querySelector('.model-style');
const scaleModel = [
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0",
    "1.0 1.0 1.0"
];

const animationName = [
    "Anim Blye",
    "",
    "Armature|ALL",
    "rotate",
    "",
    "",
    "",
    "",
    "",
    ""
];

function pageMove(pageid){
    if(pageid == 1 || pageid == 7){
        document.querySelector('header').style.display = 'flex';
    }
    if(pageid == 0 || pageid == 8){
        document.querySelector('header').style.display = 'none';
    }

    let result = '-' + pageid * 100 + '%'
    wrapper.style.transform = `translateX(${result})`;

    if(pageid == 8){
        const id = cards.result();
        setTimeout(function(){
            modelView.src = "src/models/" + id + ".glb";
            modelView.scale = scaleModel[Number(id)]; 
            modelView.animationName = animationName[Number(id)];

            alert("Цветок номер: " + id);
        }, 100);
    }
}