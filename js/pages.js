const modelView = document.querySelector('.model-style');

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
        setTimeout(function(){
            modelView.src = "../src/models/" + "1" + ".glb";

            console.log(modelView.src);
        }, 100);
    }
}