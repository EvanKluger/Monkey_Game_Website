//HERE IS THE JS FOR THE MONEKY GAME


//VARIABLES AND CONSTANTS
let monkey = document.querySelector('.Monkey');
let jungle = document.querySelector('.Jungle');

let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');

let banana2 = document.querySelector('.Banana2');
let trash2 = document.querySelector('.Trash2');

let banana3 = document.querySelector('.Banana3');
let trash3 = document.querySelector('.Trash3');

let score = 0;
let moveBy = 30;
let step = 1;
let play_A = ''
let interval;
let count_speed = 0;
let count_items = 0;

monkey.style.left = '700px';
monkey.style.top = '750px';

banana.style.left = '400px';
banana.style.top = '200px';
let banana_int_top = 150;
trash.style.left = '800px';
trash.style.top = '200px';
let trash_int_top = 150;



banana2.style.left = '400px';
banana2.style.top = '200px';
let banana2_int_top = 150;
trash2.style.left = '800px';
trash2.style.top = '200px';
let trash2_int_top = 150;

banana3.style.left = '400px';
banana3.style.top = '200px';
let banana3_int_top = 150;
trash3.style.left = '800px';
trash3.style.top = '200px';
let trash3_int_top = 150;



//FUNCTION THAT RETURN A RANDOM X POSITION
function random_x() {
    let x = Math.floor(Math.random() * 1001) + 250;
    return x
}

//FUNCTION TO UPDATE SCORE
function update(){
    document.getElementById('score').innerHTML = score;
}

function faster(){
    if(count_speed > 4){
        step = step + 1;
        moveBy = moveBy + 5;
        count_speed = 0;
    }
}


//FUNCTION TO CONTROL THE MONEKY'S MOVEMENT
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if(parseInt(monkey.style.left) - moveBy > 200){
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
            }
            else{
            monkey.style.left = '201px'
            break;
            }
        case 'ArrowRight':
            if(parseInt(monkey.style.left) + moveBy < 1200){
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
            }
            else{
            monkey.style.left = '1200px';
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
        count_speed = count_speed + 1;
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
    }
    if((parseInt(trash.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash.style.left) + 70) && (parseInt(trash.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash.style.top) + 70) ){
        alert('GAME OVER')
        score = 0;
        banana3.style.left = random_x() + 'px'
        banana3_int_top = 200
        banana3.style.top = '200px';
        trash3.style.left = random_x() + 'px';
        trash3_int_top = 200;
        trash3.style.top = '200px';
        
        banana3.style.height = '0px'; 
        banana3.style.width = '0px';
        trash3.style.height = '0px'; 
        trash3.style.width = '0px';
    
        banana2.style.left = random_x() + 'px'
        banana2_int_top = 200
        banana2.style.top = '200px';
        trash2.style.left = random_x() + 'px';
        trash2_int_top = 200;
        trash2.style.top = '200px';
        trash2.style.height = '0px'; 
        trash2.style.width = '0px';
        banana2.style.height = '0px'; 
        banana2.style.width = '0px';
    
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
        
        step = 1;
        moveBy = 30;
        clearInterval(interval)
    }
}


//FUNCTION THAT ADDS ANOTHER PAIR OF BANANA AND TRASH AT SCORE > 9
function add_items_10(){
    if(score > 9){
        banana2.style.height = '70px';
        banana2.style.width = '70px';
    
        trash2.style.height = '70px';
        trash2.style.width = '70px';

        if(banana2_int_top < 850){
            banana2.style.top = parseInt(banana2.style.top) + step + 'px';
            banana2_int_top = banana2_int_top + step;
        }
        if(banana2_int_top >= 850){
        banana2.style.left = random_x() + 'px'
        banana2_int_top = 200
        banana2.style.top = '200px';
        }
    
        if(trash2_int_top < 850){
            trash2.style.top = parseInt(trash2.style.top) + step + 'px';
            trash2_int_top = trash2_int_top + step;
        }
        if(trash2_int_top >= 850){
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = '200px';
        }
    
        if((parseInt(banana2.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana2.style.left) + 70) && (parseInt(banana2.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana2.style.top) + 70) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = '200px';
        }
        if((parseInt(trash2.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash2.style.left) + 70) && (parseInt(trash2.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash2.style.top) + 70) ){
            alert('GAME OVER')
            score = 0;
            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = '200px';
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = '200px';
            trash3.style.height = '0px'; 
            trash3.style.width = '0px';
        
            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = '200px';
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = '200px';
            trash2.style.height = '0px'; 
            trash2.style.width = '0px';
        
            banana.style.left = random_x() + 'px'
            banana_int_top = 200
            banana.style.top = '200px';
            trash.style.left = random_x() + 'px';
            trash_int_top = 200;
            trash.style.top = '200px';
            
            banana2.style.height = '0px'; 
            banana2.style.width = '0px';
            banana3.style.height = '0px'; 
            banana3.style.width = '0px';
            step = 1;
            moveBy = 30;
            count_speed = 0;
            clearInterval(interval)
        }
    }

}
//FUNCTION THAT ADDS ANOTHER PAIR OF BANANA AND TRASH AT SCORE > 19
function add_items_20(){
    if(score > 19){
        banana3.style.height = '70px';
        banana3.style.width = '70px';
    
        trash3.style.height = '70px';
        trash3.style.width = '70px';

        if(banana3_int_top < 850){
            banana3.style.top = parseInt(banana3.style.top) + step + 'px';
            banana3_int_top = banana3_int_top + step;
        }
        if(banana3_int_top >= 850){
        banana3.style.left = random_x() + 'px'
        banana3_int_top = 200
        banana3.style.top = '200px';
        }
    
        if(trash3_int_top < 850){
            trash3.style.top = parseInt(trash3.style.top) + step + 'px';
            trash3_int_top = trash3_int_top + step;
        }
        if(trash3_int_top >= 850){
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = '200px';
        }
    
        if((parseInt(banana3.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana3.style.left) + 70) && (parseInt(banana3.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana3.style.top) + 70) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = '200px';
        }
        if((parseInt(trash3.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash3.style.left) + 70) && (parseInt(trash3.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash3.style.top) + 70) ){
            alert('GAME OVER')
            score = 0;
            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = '200px';
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = '200px';
            trash3.style.height = '0px'; 
            trash3.style.width = '0px';


            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = '200px';
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = '200px';
            trash2.style.height = '0px'; 
            trash2.style.width = '0px';

            banana.style.left = random_x() + 'px'
            banana_int_top = 200
            banana.style.top = '200px';
            trash.style.left = random_x() + 'px';
            trash_int_top = 200;
            trash.style.top = '200px';

            banana2.style.height = '0px'; 
            banana2.style.width = '0px';
            banana3.style.height = '0px'; 
            banana3.style.width = '0px';
            step = 1;
            moveBy = 30;
            count_speed = 0;
            clearInterval(interval)


        }
    }

}


//FUNCTION THAT CONTROLS THE END GAME BUTTON
function end(){
    clearInterval(interval)
    score = 0;
    banana3.style.left = random_x() + 'px'
    banana3_int_top = 200
    banana3.style.top = '200px';
    trash3.style.left = random_x() + 'px';
    trash3_int_top = 200;
    trash3.style.top = '200px';
    trash3.style.height = '0px'; 
    trash3.style.width = '0px';

    banana2.style.left = random_x() + 'px'
    banana2_int_top = 200
    banana2.style.top = '200px';
    trash2.style.left = random_x() + 'px';
    trash2_int_top = 200;
    trash2.style.top = '200px';
    trash2.style.height = '0px'; 
    trash2.style.width = '0px';

    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    trash.style.left = random_x() + 'px';
    trash_int_top = 200;
    trash.style.top = '200px';

    banana2.style.height = '0px'; 
    banana2.style.width = '0px';
    banana3.style.height = '0px'; 
    banana3.style.width = '0px';
    step = 1;
    moveBy = 30;
    count_speed = 0;
    clearInterval(interval)
    
}

//FUNCTION THAT CONTROLS THE START GAME BUTTON
function start_game(){
    interval = setInterval(function() {
        setTimeout(game(), 1);
        update();
        faster();
        add_items_10();
        add_items_20();
        }, 25);
    
    

    
}