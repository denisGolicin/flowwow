let buttonNext = [];
buttonNext = document.querySelectorAll('.next');

let buttonBack = [];
buttonBack = document.querySelectorAll('.back');

const wrapper = document.querySelector('.wrapper');
let pageCount = 0;

for(let i = 0; i < buttonNext.length; i++){

    buttonNext[i].addEventListener('click', function(){
        if(pageCount >= 1){
            if(!leftCard[i - 1].active && !rightCard[i - 1].active){
                alert('Выберете карту!');
                return;
            }
        }
        pageCount = i + 1;
        pageMove(pageCount);
    })
}

for(let i = 0; i < buttonBack.length; i++){
    buttonBack[i].addEventListener('click', function(){
        pageCount = pageCount - 1;
        pageMove(pageCount);
    })
}
//=======================================
let cards = new AnimateCards();

let leftCard = [];
leftCard = document.querySelectorAll('.left');
let rightCard = [];
rightCard = document.querySelectorAll('.right');

let leftText = [];
leftText = document.querySelectorAll('.left-text');
let rightText = [];
rightText = document.querySelectorAll('.right-text');



for(let i = 0; i < leftCard.length; i++){
    leftText[i].oldVal = leftText[i].style.width; 
    
    leftCard[i].addEventListener('click', function(){
        cards.clickLeft(leftCard[i], rightCard[i], leftText[i], rightText[i]);
    })
}

for(let i = 0; i < rightCard.length; i++){
    rightText[i].oldVal = rightText[i].style.width; 

    rightCard[i].addEventListener('click', function(){
        cards.clickRight(leftCard[i], rightCard[i], leftText[i], rightText[i]);
    })
}

let iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false);
let iOS7 = (navigator.userAgent.match(/(OS 7_0)/i) ? true : false);
let android = (navigator.userAgent.match(/Android/i) ? true : false);

let buttonMain = document.querySelector('.button-main');
let textMain = document.querySelector('.main-text');

if(iOS || iOS7 || android){
    
} else {
    buttonMain.style.display = 'none';
    textMain.innerHTML = 'Sorry ;(<br>This device is not supported!';
}