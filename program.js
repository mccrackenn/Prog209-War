document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('start').addEventListener('click',function() {
        game.buttonClicked();
    });
    document.getElementById('deal').addEventListener('click',function() {
        game.dealClicked();
    })
});


let game={
    turnNumber:1,
    buttonClicked:function() {
        deck.loadDeck();
        deck.cardArray.shuffle();
        deal.style.display='block';
        start.style.display='none';
        
    },
    dealClicked:function(){
        let turnNumberCount=document.getElementById('turnNumberCount');
        //console.log(deck.cardArray);
        turnNumberCount.textContent=this.turnNumber++;
        
    }
}


let playerScore=document.getElementById('playerScore');
let computerScore=document.getElementById('computerScore')







// const moonLanding=new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getMonth());

// const event=new Date(2015, 5, 28, 15, 30,0);
// console.log(event.toDateString());

// presentDay=new Date();
// console.log(presentDay)