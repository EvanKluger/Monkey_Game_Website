let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let moveBy = 10;
var counter = 0;





window.addEventListener('load', () => {
    monkey.style.position = 'absolute';
    monkey.style.left = 700;
    monkey.style.top = 800;
});

window.addEventListener('load', () => {
    banana.style.position = 'absolute';
    banana.style.left = 400;
    banana.style.top = 300;
});

window.addEventListener('load', () => {
    trash.style.position = 'absolute';
    trash.style.left = 700;
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
    banana.style.top = parseInt(300) + 'px'
}

function fall_trash(){
    while(trash.style.top < 900){
        trash.style.top = parseInt(trash.style.top) + moveBy + 'px'
    }
    trash.style.top = parseInt(300) + 'px'
}

var game = function() {
    
    if((trash.style.left <= monkey.style.left <=  trash.style.left + 70) && (trash.style.top <= monkey.style.top <=  trash.style.top + 70)){
        alert("Game Over. score: "+ counter);
        counter=0;
    }
    else if((banana.style.left <= monkey.style.left <= banana.style.left + 70) && (banana.style.top <= monkey.style.top <= banana.style.top + 70)){
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter;
    }
    
    else{
        document.getElementById("scoreSpan").innerHTML = counter;
    }
}