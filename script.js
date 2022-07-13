let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let moveBy = 10;
var counter = 0;

window.addEventListener('load', () => {
    monkey.style.position = 'absolute';
    monkey.style.left = 0;
    monkey.style.top = 0;
});

window.addEventListener('load', () => {
    banana.style.position = 'absolute';
    banana.style.left = 0;
    banana.style.top = 300;
});

window.addEventListener('load', () => {
    trash.style.position = 'absolute';
    trash.style.left = 0;
    trash.style.top = 300;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
    }
});


function fall_banana(){
    while(banana.style.top < 900){
        banana.style.top = parseInt(banana.style.top) + moveBy + 'px'
    }
}

function fall_trash(){
    while(trash.style.top < 900){
        trash.style.top = parseInt(trash.style.top) + moveBy + 'px'
    }
}

var game = function() {
    let monkey_body = parseInt(window.getComputedStyle(monkey).getPropertyValue("Monkey Body"));
    let trash_body = parseInt(window.getComputedStyle(banana).getPropertyValue("Trash Body"));
    let banana_body = parseInt(window.getComputedStyle(trash).getPropertyValue("Banana Body"));
    if(monkey_body == trash_body){
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
    }
    else if(monkey_body == banana_body){
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
    
    else{
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}