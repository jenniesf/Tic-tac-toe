let currentPlayer = 'x'
let box0 = document.querySelector('#box-0')
let box1 = document.querySelector('#box-1')
let box2 = document.querySelector('#box-2')
let box3 = document.querySelector('#box-3')
let box4 = document.querySelector('#box-4')
let box5 = document.querySelector('#box-5')
let box6 = document.querySelector('#box-6')
let box7 = document.querySelector('#box-7')
let box8 = document.querySelector('#box-8')

document.querySelector('#reset').addEventListener('click', resetGame)
document.querySelectorAll('.space').forEach(x => x.addEventListener('click', boxClick))

function boxClick (box) { 
    const clickedBox = box.target
    addToBoard(clickedBox)         
}


function addToBoard (clickedBox) {
    if (currentPlayer == 'x') {
        clickedBox.style.color = 'rgb(33, 124, 10)'
        clickedBox.innerHTML = currentPlayer 
    } else {
        clickedBox.style.color = 'rgba(66, 110, 211, 0.831)' 
        clickedBox.innerHTML = currentPlayer 
    }
    clickedBox.style.pointerEvents = 'none'
    checkWinner(currentPlayer)  
    changePlayer.determinePlayer() 
}

// function changePlayer () {
//     if (currentPlayer == 'x') {
//         currentPlayer = 'o' 
//     } else {
//         currentPlayer = 'x'
//     }
// }

let changePlayer = {
    determinePlayer: function() {
        if (currentPlayer == 'x') {
            currentPlayer = 'o' 
        } else {
            currentPlayer = 'x'
        }
    }
}


    // OOP EXAMPLE
// let seriousBusinessPerson = {
//     hourlyRate: 250,
//     hours: 160,
//     taxRate: .40, //changed
//     calculateProfit: function() {
//       return this.hourlyRate * this.hours * (1 - this.taxRate)
//     }
// }
// console.log( seriousBusinessPerson.calculateProfit() )


function checkWinner (currentPlayer) {
    if (  (box0.innerHTML === currentPlayer && box1.innerHTML === currentPlayer && box2.innerHTML === currentPlayer) || 
          (box3.innerHTML === currentPlayer && box4.innerHTML === currentPlayer && box5.innerHTML === currentPlayer) || 
          (box6.innerHTML === currentPlayer && box7.innerHTML === currentPlayer && box8.innerHTML === currentPlayer) || 
          (box0.innerHTML === currentPlayer && box3.innerHTML === currentPlayer && box6.innerHTML === currentPlayer) || 
          (box1.innerHTML === currentPlayer && box4.innerHTML === currentPlayer && box7.innerHTML === currentPlayer) || 
          (box2.innerHTML === currentPlayer && box5.innerHTML === currentPlayer && box8.innerHTML === currentPlayer) || 
          (box0.innerHTML === currentPlayer && box4.innerHTML === currentPlayer && box8.innerHTML === currentPlayer) ||
          (box2.innerHTML === currentPlayer && box4.innerHTML === currentPlayer && box6.innerHTML === currentPlayer)
    ) { 
        winningMessage(currentPlayer)                                                     //run function - print winner on DOM
        document.querySelectorAll('.space').forEach(x => x.style.pointerEvents = 'none')  //stop clicked boxes from clicking/running
    }
}

function winningMessage (currentPlayer) {
    if (currentPlayer == 'x') {
        document.querySelector('#game-result').style.color = 'rgb(33, 124, 10)'
        document.querySelector('#game-result').innerHTML = `Player ${currentPlayer.toUpperCase()} IS THE WINNER`
    } else {
        document.querySelector('#game-result').style.color = 'rgba(66, 110, 211, 0.831)'
        document.querySelector('#game-result').innerHTML = `Player ${currentPlayer.toUpperCase()} IS THE WINNER`
    }
}

function resetGame () {
    box0.innerHTML = ''
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''

    document.querySelector('#game-result').innerHTML = ''
    document.querySelectorAll('.space').forEach(x => x.style.pointerEvents = 'auto')  
}




