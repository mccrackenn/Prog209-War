document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('start').addEventListener('click',function() {
        game.buttonClicked();
    });
    document.getElementById('deal').addEventListener('click',function() {
        game.dealClicked();
    })
});
index=0;
playerTotal=0;
computerTotal=0;

let game={
    turnNumber:0,
    buttonClicked:function() {
        deck.loadDeck();
        deck.cardArray.shuffle();
        console.log(computerArray);
        console.log(playerArray);
        deal.style.display='block';
        start.style.display='none';
        
    },
    getName:function(theRank){
        switch(theRank) {
            case 11:return "Jack";
            case 12:return "Queen";
            case 13:return "King";
            case 14:return "Ace";
            default: return theRank;
        }
    },
    getSuit:function(suit){
        switch(suit) {
            case 1:return "Spades";
            case 2:return "Diamonds";
            case 3:return "Hearts";
            case 4:return "Clubs";
            default:return suit;
        }
    },
    dealClicked:function(){
       
        let turnNumberCount=document.getElementById('turnNumberCount');
        this.turnNumber++;
        turnNumberCount.textContent=this.turnNumber;
        playerSpan.style.display='block';
        playerSpan.textContent=this.getName(playerArray[index].rank)+" of "+this.getSuit(playerArray[index].suit);
        computerSpan.style.display='block';
        computerSpan.textContent=this.getName(computerArray[index].rank)+" of "+this.getSuit(computerArray[index].suit);
        let getScore=this.checkIt(playerArray,computerArray,index);
        index++;
        console.log(index);

    },
    checkIt:function(p, c, i){
        if(p[i].rank>c[i].rank) {
            console.log("player wins");
            playerTotal++;
            playerScore.textContent=playerTotal;
        }else if(p[i].rank<c[i].rank){
            console.log("computer wins!");
            computerTotal++;
            computerScore.textContent=computerTotal;
        }else{
            if(p[i].suit<c[i].suit){
            playerTotal++;
            playerScore.textContent=playerTotal;
            console.log("tie!,high suit trumps!");
            }else{
            computerTotal++;
            computerScore.textContent=computerTotal;
            console.log("tie!,high suit trumps!");
            }
        }
            
        return i;
    }
}












// const moonLanding=new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getMonth());

// const event=new Date(2015, 5, 28, 15, 30,0);
// console.log(event.toDateString());

// presentDay=new Date();
// console.log(presentDay)