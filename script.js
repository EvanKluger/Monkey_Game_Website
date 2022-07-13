var banana = document.getElementById("banana");
var trash = document.getElementById("trash");
var counter = 0;

let monkey = document.querySelector('.Monkey');
let moveBy = 10;
window.addEventListener('load', () => {
    monkey.style.position = 'absolute';
    moneky.style.left = 0;
    moneky.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.monkey = parseInt(monkey.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.monkey = parseInt(circle.style.left) + moveBy + 'px';
            break;
    }
});


function side_move(){
    if(monkey.classList == "animate"){return}
    monkey.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function fall_banana(){
    if(banana.classList == "animate"){return}
    banana.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function fall_trash(){
    if(trash.classList == "animate"){return}
    trash.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}


var game = function() {
    let monkey_body = parseInt(window.getComputedStyle(monkey).getPropertyValue("Monkey Body"));
    let trash_body = parseInt(window.getComputedStyle(block).getPropertyValue("Trash Body"));
    let banana_body = parseInt(window.getComputedStyle(block).getPropertyValue("Banana Body"));
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