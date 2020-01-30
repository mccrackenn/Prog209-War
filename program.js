document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('start').addEventListener('click', function () {
        game.buttonClicked();
    });
    document.getElementById('deal').addEventListener('click', function () {
        game.dealClicked();
    })
});
index = 0;
playerTotal = 0;
computerTotal = 0;


let game = {
    turnNumber: 0,
    buttonClicked: function () {
        deck.loadDeck();
        deck.cardArray.shuffle();
        console.log(playerArray);
        console.log(computerArray);
        deal.style.display = 'block';
        start.style.display = 'none';

    },
    getName: function (theRank) {
        switch (theRank) {
            case 11: return "Jack";
            case 12: return "Queen";
            case 13: return "King";
            case 14: return "Ace";
            default: return theRank;
        }
    },
    getSuit: function (suit) {
        switch (suit) {
            case 1: return "Spades";
            case 2: return "Diamonds";
            case 3: return "Hearts";
            case 4: return "Clubs";
            default: return suit;
        }
    },
    dealClicked: function () {

        if (index === 25) {
            if()
            console.log("game over");
            deal.style.display = 'none';
        }
        let turnNumberCount = document.getElementById('turnNumberCount');
        this.turnNumber++;
        turnNumberCount.textContent = this.turnNumber;
        playerSpan.style.display = 'block';
        playerSpan.textContent = this.getName(playerArray[index].rank) + " of " + this.getSuit(playerArray[index].suit);
        if (this.getSuit(playerArray[index].suit === 2) || this.getSuit(playerArray[index].suit === 3)) {
            playerSpan.style.color = 'red';
        } else {
            playerSpan.style.color = 'black';
        }
        computerSpan.style.display = 'block';
        computerSpan.textContent = this.getName(computerArray[index].rank) + " of " + this.getSuit(computerArray[index].suit);
        if (this.getSuit(computerArray[index].suit === 2) || this.getSuit(computerArray[index].suit === 3)) {
            computerSpan.style.color = 'red';
        } else {
            computerSpan.style.color = 'black';
        }
        this.checkIt(playerArray, computerArray, index);
        index++;

        //console.log(index);

    },
    checkIt: function (p, c, i) {
        if (p[i].rank > c[i].rank) {
            console.log("player wins");
            playerTotal++;
            playerScore.textContent = playerTotal;
            handResult.textContent='You win this Hand!';
        } else if (p[i].rank < c[i].rank) {
            console.log("computer wins!");
            computerTotal++;
            computerScore.textContent = computerTotal;
            handResult.textContent="Computer Wins this Hand!";
        } else {
            if (p[i].suit < c[i].suit) {
                playerTotal++;
                playerScore.textContent = playerTotal;
                console.log("tie!,high suit trumps!");
                handResult.textContent="Tie on Rank, by Suit You win this Hand!";
            } else {
                computerTotal++;
                computerScore.textContent = computerTotal;
                console.log("tie!,high suit trumps!");
                handResult.textContent="Tie on Rank, by Suit Computer Wins this Hand!";
            }
        }

    },



}












// const moonLanding=new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getMonth());

// const event=new Date(2015, 5, 28, 15, 30,0);
// console.log(event.toDateString());

// presentDay=new Date();
// console.log(presentDay)