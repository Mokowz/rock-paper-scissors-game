let fighter = ""
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const fighterName = document.getElementById("span-choice")
const playBtn = document.getElementById("play-btn")
const announceWinner = document.getElementById("winner")
const scoreLine = document.getElementById("score")


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

const determine_winner = () => {
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

    //compare the fighters
    if (computerFighter == "ROCK" && fighter == "SCISSORS"){
        announceWinner.innerHTML = "You LOSE :("
        // announceWinner.innerHTML.style.color = "red" 
    }
    else if (computerFighter == fighter){
        announceWinner.innerHTML = "You have DRAWN! Try again!"
        // announceWinner.innerHTML.style.color = "white"
    }
    else if (computerFighter == "ROCK" && fighter == "PAPER"){
        announceWinner.innerHTML = "You WIN :)"
        // announceWinner.style.color = "green"
    }
    else if (computerFighter == "SCISSORS" && fighter == "ROCK"){
        announceWinner.innerHTML = "You WIN :)"
        // announceWinner.style.color = "green" 
    }
    else if (computerFighter == "SCISSORS" && fighter == "PAPER"){
        announceWinner.innerHTML = "You LOSE :("
        // announceWinner.style.color = "red"
    }
    else if (computerFighter == "PAPER" && fighter == "ROCK"){
        announceWinner.innerHTML = "You LOSE :("
        // announceWinner.style.color = "red" 
    }
    else if (computerFighter == "PAPER" && fighter == "SCISSORS"){
        announceWinner.innerHTML = "You WIN :)"
        // announceWinner.style.color = "green"
    }
    else if (fighter == ""){
        announceWinner.innerHTML = "You have not chosen a fighter"
    }
    $("#play-btn").click(function(){
        $("#winner").show()
    })

    if (announceWinner.innerHTML == "You WIN :)"){
        announceWinner.style.color = "green"
    }
    else if (announceWinner.innerHTML == "You LOSE :("){
        announceWinner.style.color = "red" 
    }
    else if (announceWinner.innerHTML == "You have DRAWN! Try again!"){
        announceWinner.style.color = "white"
    }

    let attempts = "0"
    scoreLine.innerHTML = `Your score: ${attempts}`

    if(announceWinner.innerHTML == "You WIN :)"){
        attempts += 3
        scoreLine.innerHTML = `Your score: ${attempts}`
    }
    else if (announceWinner.innerHTML == "You have DRAWN! Try again!"){
        attempts += 1
        scoreLine.innerHTML = `Your score: ${attempts}`
    }

    else if (announceWinner.innerHTML == "You LOSE :("){
        attempts += 0
        scoreLine.innerHTML = `Your score: ${attempts}`
    }
}

playBtn.addEventListener("click", function(){
    setTimeout(determine_winner, 700)
})


