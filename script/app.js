// player1;
// hull: 20
// firepower: 5
// accuracy: 7
// alienShips{};
//  randomly
//    hull: 3,7
//   firepower: 2, 4
//   accuracy: .6, .08


//1st try to destroy 1st ship
//if ship survives it attacks player1
//if player1 survive, attack again
//if destroy = true, option attack next ship or retreat
//if player1 retreat game over
//win if you destroy all aliens
//you lose if you are destroyed

//alienship properties:
// hull: hitpoints
// if reached 0 or less = destroyed
// firepower: success 
// accuracy: random 0-1 (use Math.random <=0.8 =successful)>=0.8 = missed

// battle
// iterating over aliens


let player1 = {
    top: 700,
    left: 550
};

let missile = [];

document.onkeydown = function(e) {

    if (e.keyCode === 37){
        console.log("LEFT");
        player1.left = player1.left  - 10;
        movePlayer1()
    }
    else if (e.keyCode === 39) {
        console.log("RIGHT");
        player1.left = player1.left  + 10;
        movePlayer1()
    }
}
function movePlayer1() {
    document.getElementById('player1').style.left = player1.left + "px";
    }

function drawMissiles() {
    document.getElementById('missile').innerHTML = "";
    for (let missile = 0; missile < missile.length; missile++) {
        document.getElementById('missile').innerHTML += "div id='missile'></div>";
          missiles(missile)
    }
}
function moveMissiles() {
    for (let missile = 0; missle < missile.lengthl; missile++) {
        missiles[missile] = missiles[missile] - 5;
    }
}
function alienships() {
    document.getElementById('alienShip').innerHTML = "";
    for (let alienShip = 0; alienShip < alienShip.length; alienShip++) {
        document.getElementById('alienShip').innerHTML += "div id='alienShip'></div>";
          alienShips(alienShip);
    }
}