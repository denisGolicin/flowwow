let cardMove = false;
let interval = 200;
class AnimateCards extends ProccesTest {
   
    clickLeft(left, right){
        if(cardMove) return;
    
        if(left.active){
            resetAmination(left, right);
            return;
        }
        setTransform(right, '25%', '0', '1', '-5deg');
        setTimeout(setAninRightDownCard, interval, left, right);
        left.active = true;
        right.active = false;
        cardMove = true;
        cards.change(pageCount, left.name);
        console.log(cards.result());
    }
    clickRight(left, right){
        if(right.active){
            resetAmination(left, right);
            return;
        }
        setTransform(left, '-50%', '0', '1', '-5deg');
        setTimeout(setAninLeftDownCard, interval, left, right);
        right.active = true;
        left.active = false;
        cardMove = true;
        cards.change(pageCount, right.name);
        console.log(cards.result());
    }
}
function resetAmination(left, right){
    setTransform(right, '25%', '0', '1', '0deg');
    setTransform(left, '-25%', '0', '1', '0deg');
    setTimeout(setCardWith, interval, left, right);
    right.active = false;
    left.active = false;
    cardMove = true;
    cards.change(pageCount, "");
}
function setAninLeftDownCard(left, right){
    left.style.zIndex = '0';
    setTransform(left, '15%', '10%', '0.7', '12deg');
    setTransform(right, '-25%', '0', '1.1', '-13deg');
    setTimeout(unblockClick, interval + 300, false);
}
function setAninRightDownCard(left, right){
    left.style.zIndex = '1';
    setTransform(left, '50%', '0', '1.1', '12deg');
    setTransform(right, '15%', '10%', '0.7', '-13deg');
    setTimeout(unblockClick, interval + 300, false);
}
function setCardWith(left, right){
    setTransform(left, '10%', '0', '1', '0deg');
    setTransform(right, '-10%', '0', '1', '0deg');
    left.style.zIndex = '0';
    setTimeout(unblockClick, interval + 400, false);
}

function setTransform(e, posX, posY, scale, rotate){
    e.style.transform = 
    `translateX(${posX})\
    translateY(${posY})\
    scale(${scale})\
    rotate(${rotate})`;
}
function unblockClick() { cardMove = false; }




