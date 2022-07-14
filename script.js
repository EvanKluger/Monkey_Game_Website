let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let moveBy = 1;
let counter = 0;


function random_x() {
    let x = Math.floor(Math.random() * 701) + 300;
    return x
}


monkey.style.left = '700px';
monkey.style.top = '700px';

banana.style.left = '400px';
banana.style.top = '200px';
banana_int_top = 150;
banana_int_left = 800;

trash.style.left = '800px';
trash.style.top = '200px';

var banana_move_top = banana.offsetTop
var banana_move_left = banana.offsetLeft

var trash_move_top = trash.offsetTop
var trash_move_left = trash.offsetLeft

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

function banana_movement(){
    while(banana_int_top < 900){
        banana_int_top = banana_int_top + moveBy;
        banana.style.top = banana_int_top + "px";
    }
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
}


function trash_movement(){
    while(trash_int_top < 900){
        trash_move_top = trash_move_top + moveBy;
        trash.style.top = trash_move_top + "px";
    }
    trash.style.left = random_x() + 'px';
    trash_int_top = 200;
    trash.style.top = '200px';
}


/*
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
*/

for(let i = 0; i<15; i++){
banana_movement()
}
