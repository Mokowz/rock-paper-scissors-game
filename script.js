let fighter = ""
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const fighterName = document.getElementById("span-choice")
const playBtn = document.getElementById("play-btn")
const announceWinner = document.getElementById("winner")

//Assign fighter values
rock.addEventListener("click", function(){
    fighter = "rock"
    fighter = fighter.toUpperCase()
    fighterName.innerHTML = `Your fighter is ${fighter}!`
})
paper.addEventListener("click", function(){
    fighter = "paper"
    fighter = fighter.toUpperCase()
    fighterName.innerHTML = `Your fighter is ${fighter}!`
})
scissors.addEventListener("click", function(){
    fighter = "scissors"
    fighter = fighter.toUpperCase()
    fighterName.innerHTML = `Your fighter is ${fighter}!`
})

//Random fighter generation
// let random = Math.floor(Math.random() * 3)
// let computerFighter = ""

// if (random == 0){
//     computerFighter = "paper"
//     computerFighter = computerFighter.toUpperCase()
// }
// else if (random == 1){
//     computerFighter = "rock"
//     computerFighter = computerFighter.toUpperCase()
// }
// else{
//     computerFighter = "scissors"
//     computerFighter = computerFighter.toUpperCase()
// }

//Determine the winner
setTimeout(function(){
    playBtn.addEventListener("click", function(){
        let random = Math.floor(Math.random() * 3)
    let computerFighter = ""

    if (random == 0){
        computerFighter = "paper"
        computerFighter = computerFighter.toUpperCase()
    }   
    else if (random == 1){
        computerFighter = "rock"
        computerFighter = computerFighter.toUpperCase()
    }
    else{
        computerFighter = "scissors"
        computerFighter = computerFighter.toUpperCase()
    }

        if (computerFighter == "ROCK" && fighter == "SCISSORS"){
            announceWinner.innerHTML = "You LOSE :("
            announceWinner.innerHTML.style.color = "red" 
        }
        else if (computerFighter === fighter){
            announceWinner.innerHTML = "You have DRAWN! Try again!"
        }
        else if (computerFighter == "ROCK" && fighter == "PAPER"){
            announceWinner.innerHTML = "You WIN :)"
            announceWinner.style.color = "green"
        }
        else if (computerFighter == "SCISSORS" && fighter == "ROCK"){
            announceWinner.innerHTML = "You WIN :)"
            announceWinner.style.color = "green" 
        }
        else if (computerFighter == "SCISSORS" && fighter == "PAPER"){
            announceWinner.innerHTML = "You LOSE :("
            announceWinner.style.color = "red"
        }
        else if (computerFighter == "PAPER" && fighter == "ROCK"){
            announceWinner.innerHTML = "You LOSE :("
            announceWinner.style.color = "red" 
        }
        else if (computerFighter == "PAPER" && fighter == "SCISSORS"){
            announceWinner.innerHTML = "You WIN :)"
            announceWinner.style.color = "green"
        }
        else if (fighter == ""){
            announceWinner.innerHTML = "Choose a fighter!"
        }
    })
}, 4000)

//hide the announce winner message when the images are clicked
$(".img-two").click(function(){
    $("#winner").hide().show()
})

if (announceWinner.innerHTML = "You WIN :)"){
    announceWinner.style.color = "green"
}
else if (announceWinner.innerHTML = "You LOSE :("){
    announceWinner.style.color = "red"
}
else if (announceWinner.innerHTML = "You have DRAWN! Try again!"){
    announceWinner.style.color = "white"
}

