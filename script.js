let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let moveBy = 20;
let counter = 0;


function random_x() {
    let x = Math.floor(Math.random() * 701) + 300;
}


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
            if(monkey.style.left < 900){
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            }
            break;
    }
});


function banana_movement(){
    while(banana.style.top < 900){
        banana.style.top = parseInt(banana.style.top) + moveBy + 'px'
    }
    banana.style.top = parseInt(300) + 'px'
    banana.style.left = random_x()
}

function trash_movement(){
    while(trash.style.top < 900){
        trash.style.top = parseInt(trash.style.top) + moveBy + 'px'
    }
    trash.style.top = parseInt(300) + 'px'
    trash.style.left = random_x()
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

window.addEventListener('load', () => {
    trash_movement()
    banana_movement()
});
