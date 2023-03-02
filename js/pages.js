const modelView = document.querySelector('.model-style');
const scaleModel = [
    "0.9 0.9 0.9", // 1
    "6.0 6.0 6.0", // 2
    "0.05 0.05 0.05", // 3
    "0.18 0.18 0.18", // 4
    "0.5 0.5 0.5", // 5
    "0.5 0.5 0.5", // 6
    "0.05 0.05 0.05", // 7
    "1.0 1.0 1.0",
    "0.3 0.3 0.3", //9
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
        modelView.iosSrc = "src/models/" + "2" + ".usdz";
        modelView.src = "src/models/" + "2" + ".glb";
    }
}