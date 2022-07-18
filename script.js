//HERE IS THE JS FOR THE MONEKY GAME


//VARIABLES AND CONSTANTS
let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let score = 0
let moveBy = 20;
let step = 1;
let play_A = ''
let interval;
monkey.style.left = '700px';
monkey.style.top = '775px';
banana.style.left = '400px';
banana.style.top = '200px';
let banana_int_top = 150;
let banana_int_left = 800;
trash.style.left = '800px';
trash.style.top = '200px';
let trash_int_top = 150;
let trash_int_left = 800;


//FUNCTION THAT RETURN A RANDOM X POSITION
function random_x() {
    let x = Math.floor(Math.random() * 1001) + 250;
    return x
}

//FUNCTION TO UPDATE SCORE
function update(){
    document.getElementById('score').innerHTML = score;
}

//FUNCTION TO CONTROL THE MONEKY'S MOVEMENT
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if(parseInt(monkey.style.left) > 200){
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'ArrowRight':
            if(parseInt(monkey.style.left) < 1250){
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
    }
});


//FUNCTION THAT THE GAME RUNS UNDER
function game(){
    if(banana_int_top < 850){
        banana.style.top = parseInt(banana.style.top) + step + 'px';
        banana_int_top = banana_int_top + step;
    }
    if(banana_int_top >= 850){
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    }

    if(trash_int_top < 850){
        trash.style.top = parseInt(trash.style.top) + step + 'px';
        trash_int_top = trash_int_top + step;
    }
    if(trash_int_top >= 850){
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
    }

    if((parseInt(banana.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana.style.left) + 70) && (parseInt(banana.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana.style.top) + 70) ){
        score = score + 1;
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
    }
    if((parseInt(trash.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash.style.left) + 70) && (parseInt(trash.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash.style.top) + 70) ){
        alert('GAME OVER')
        score = 0;
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
        clearInterval(interval)

    }
}
//FUNCTION THAT CONTROLS THE END GAME BUTTON
function end(){
    clearInterval(interval)
    score = 0;
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    trash.style.left = random_x() + 'px';
    trash_int_top = 200;
    trash.style.top = '200px';
    
}

//FUNCTION THAT CONTROLS THE START GAME BUTTON
function start_game(){
    interval = setInterval(function() {
        setTimeout(game(), 1);
        update();
        }, 25);
}