let cardMove = false;
let interval = 200;
class AnimateCards extends ProccesTest {
   
    clickLeft(left, right, leftText, rightText){
        if(cardMove) return;
    
        if(left.active){
            resetAmination(left, right, leftText, rightText);
            return;
        }
        setTransform(right, '25%', '0', '1', '-5deg');
        setTimeout(setAninRightDownCard, interval, left, right);
        left.active = true;
        right.active = false;
        cardMove = true;
        cards.change(pageCount, left.name);
        console.log(cards.result());

        leftText.style.width = "100%";
        leftText.style.opacity = "1";

        rightText.style.width = "0";
        rightText.style.opacity = "0";
    }
    clickRight(left, right, leftText, rightText){
        if(right.active){
            resetAmination(left, right, leftText, rightText);
            return;
        }
        setTransform(left, '-50%', '0', '1', '-5deg');
        setTimeout(setAninLeftDownCard, interval, left, right);
        right.active = true;
        left.active = false;
        cardMove = true;
        cards.change(pageCount, right.name);
        console.log(cards.result());

        leftText.style.width = "0";
        leftText.style.opacity = "0";

        rightText.style.width = "100%";
        rightText.style.opacity = "1";
    }
}
function resetAmination(left, right, leftText, rightText){
    setTransform(right, '25%', '0', '1', '0deg');
    setTransform(left, '-25%', '0', '1', '0deg');
    setTimeout(setCardWith, interval, left, right);
    right.active = false;
    left.active = false;
    cardMove = true;
    cards.change(pageCount, "");

    leftText.style.width = leftText.oldVal;
    leftText.style.opacity = "1";

    rightText.style.width = rightText.oldVal;
    rightText.style.opacity = "1";


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




