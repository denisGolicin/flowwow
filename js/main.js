let buttonNext = [];
buttonNext = document.querySelectorAll('.next');

let buttonBack = [];
buttonBack = document.querySelectorAll('.back');

const wrapper = document.querySelector('.wrapper');
let pageCount = 0;

for(let i = 0; i < buttonNext.length; i++){

    buttonNext[i].addEventListener('click', function(){
        if(pageCount >= 1){
            // if(!leftCard[i - 1].active && !rightCard[i - 1].active){
            //     alert('Выберете карту!');
            //     return;
            // }
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



for(let i = 0; i < leftCard.length; i++){
    leftCard[i].addEventListener('click', function(){
        cards.clickLeft(leftCard[i], rightCard[i]);
    })
}

for(let i = 0; i < rightCard.length; i++){
    rightCard[i].addEventListener('click', function(){
        cards.clickRight(leftCard[i], rightCard[i]);
    })
}





// const left = document.querySelector('#left');
// const right = document.querySelector('#right');

// left.addEventListener('click', function(){
//     //=========================================
//     if(left.classList.contains('state-up-left')){
//         clearAnimation();
//     } else {
//         left.classList.add('state-up-left');
//         right.classList.add('state-down-right');
//     }
//     //=========================================
//     if(right.classList.contains('state-up-right')){
//         clearAnimation();

//         right.classList.remove('state-up-right');
//         right.classList.add('state-down-right');

//         left.classList.add('state-up-left');
//         left.classList.remove('state-down-left');
//     }
    
    
// })
// right.addEventListener('click', function(){
//     if(right.classList.contains('state-up-right')){
//         clearAnimation();
//     } else {
//         left.classList.add('state-down-left');
//         right.classList.add('state-up-right');
//     }
//     //=========================================
//     if(left.classList.contains('state-up-left')){
//         clearAnimation();

//         left.classList.remove('state-up-left');
//         left.classList.add('state-down-left');

//         right.classList.add('state-up-right');
//         right.classList.remove('state-down-right');
//     }
    
// })

// function clearAnimation(){
//     left.classList.remove('state-up-left');
//     left.classList.remove('state-down-left');

//     right.classList.remove('state-up-right');
//     right.classList.remove('state-down-right');
// }

// let leftCard = [];
// leftCard = document.querySelectorAll('.left');
// let rightCard = [];
// rightCard = document.querySelectorAll('.right');

// let cardMove = false;
// let interval = 100;

// for(let i = 0; i < leftCard.length; i++){
//     leftCard[i].addEventListener('click', function(){
//         if(cardMove) return;
    
//         if(leftCard[i].active){
//             setTransform(rightCard[i], '25%', '0', '1', '0deg');
//             setTransform(leftCard[i], '-25%', '0', '1', '0deg');
//             setTimeout(setCardWith, interval, leftCard[i], rightCard[i]);
//             leftCard[i].active = false;
//             cardMove = true;
//             return;
//         }
//         console.log('!')
//         setTransform(rightCard[i], '25%', '0', '1', '-5deg');
//         setTimeout(setAninRightDownCard, interval, leftCard[i], rightCard[i]);
//         leftCard[i].active = true;
//         cardMove = true;
//     })
// }

// function setAninRightDownCard(left, right){
//     left.style.zIndex = '1';
//     setTransform(left, '50%', '0', '1.1', '12deg');
//     setTransform(right, '15%', '10%', '0.7', '-13deg');
//     setTimeout(unblockClick, interval + 300, false);
// }
// function setCardWith(left, right){
//     setTransform(left, '10%', '0', '1', '0deg');
//     setTransform(right, '-10%', '0', '1', '0deg');
//     left.style.zIndex = '0';
//     setTimeout(unblockClick, interval + 400, false);
// }

// function setTransform(e, posX, posY, scale, rotate){
//     e.style.transform = 
//     `translateX(${posX})\
//     translateY(${posY})\
//     scale(${scale})\
//     rotate(${rotate})`;
// }
// function unblockClick() { cardMove = false; }



// const left = document.querySelector('#left');
// const right = document.querySelector('#right');

// left.addEventListener('click', function(){
//     //=========================================
//     if(left.classList.contains('state-up-left')){
//         clearAnimation();
//     } else {
//         left.classList.add('state-up-left');
//         right.classList.add('state-down-right');
//     }
//     //=========================================
//     if(right.classList.contains('state-up-right')){
//         clearAnimation();

//         right.classList.remove('state-up-right');
//         right.classList.add('state-down-right');

//         left.classList.add('state-up-left');
//         left.classList.remove('state-down-left');
//     }
    
    
// })
// right.addEventListener('click', function(){
//     if(right.classList.contains('state-up-right')){
//         clearAnimation();
//     } else {
//         left.classList.add('state-down-left');
//         right.classList.add('state-up-right');
//     }
//     //=========================================
//     if(left.classList.contains('state-up-left')){
//         clearAnimation();

//         left.classList.remove('state-up-left');
//         left.classList.add('state-down-left');

//         right.classList.add('state-up-right');
//         right.classList.remove('state-down-right');
//     }
    
// })

// function clearAnimation(){
//     left.classList.remove('state-up-left');
//     left.classList.remove('state-down-left');

//     right.classList.remove('state-up-right');
//     right.classList.remove('state-down-right');
// }
//=======================================

// window.addEventListener('resize', function() {
//     if(window.matchMedia('(max-width: 767px)').matches) {
        
//     }
//     else{
        
//     }
// }, true);


// let h = document.querySelector('.block-team');
// h.addEventListener('touchstart', handleTouchStart5, false);        
// h.addEventListener('touchmove', handleTouchMove5, false);

// function getTouches5(evt) {
// return evt.touches ||             // browser API
//         evt.originalEvent.touches; // jQuery
// }                                                     
                                                                        
// function handleTouchStart5(evt) {
//     const firstTouch = getTouches5(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                
                                                                        
// function handleTouchMove5(evt) {
//     if(!isMobile) return;
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                        
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* right swipe */ 
            
//         } else {
//             /* left swipe */
            
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };

// let tg = {
//     token: "", 
//     chat_id: "" 
// }
// let sendTg = document.getElementById('sendTg');
// sendTg.addEventListener("click", function(e){
//     e.preventDefault();

//     let info = document.forms.forma;
//     let name = info.elements.namr.value;
//     let phone = info.elements.phoneE.value;

//     sendMessage(
//         "Заявка с сайта!\n" +
//         "Имя: " + String(name) + "\n" +
//         "Телефон: " + String(phone) + "\n" +
//         "Способ связи: " + String(result) + "\n" +
//         "Тариф: " + str + "\n" +
//         "Комментарий: " + String(r)
//     );
//     // reset varible
//     // delay form
// })
// // https://api.telegram.org/bot715125500:5256737385:AAHlQd83rrsgc5vwjL0k-6mDYfsz7J_ZD7I/sendMessage?chat_id=-1001212271187&parse_mode=HTML&text=test
// function sendMessage(text)
// {
//     const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
//     const obj = {
//         chat_id: tg.chat_id, // Telegram chat id
//         text: text // The text to send
//     };
//     const xht = new XMLHttpRequest();
//     xht.open("POST", url, true);
//     xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//     xht.send(JSON.stringify(obj));

    
// }







