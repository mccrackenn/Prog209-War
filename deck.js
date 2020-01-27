let deck = {
    cardArray: [],
    loadDeck: function () {
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 13; j++) {
                let aCard = new Card(i + 1, j + 2);
                this.cardArray.push(aCard);
            }

        }
    }

}

Array.prototype.shuffle = function () {
    let input = this;
    for (let i = input.length - 1; i >= 0; i--) {

        random = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = this[random];

        input[random] = input[i];
        input[i] = itemAtIndex;
    }
    computerArray = [];
    playerArray = [];
    for (k = 0; k < this.length; k++) {
        if (k % 2 === 0) {
            //console.log('even');
            playerArray.push(this[k]);
        } else {
            //console.log('odd');
            computerArray.push(this[k]);
        }
    }
    return playerArray, computerArray;
}
    //console.log(computerArray[0]);
    //return computerArray, playerArray;
    //console.log(computerArray,playerArray);




//deck.cardArray.shuffle();
//console.log(deck.cardArray);






// shuffle:function(cardArray){
//     let input=this;

// for(let n=deck.cardArray.length -1; n > 0; n--){
// let random=Math.floor(Math.random()*52);
// let temp=input[random];
// input[random]=input[i];
// input[i]=temp;
// }
// return input;
// }

//array1=[];
// array2=[];

// console.log(deck.cardArray);
// for(k=0;k<deck.cardArray.length;k++){
//     if (k % 2===0) {
//         //console.log('even');
//         array1.push(k);
//     }else{
//         //console.log('odd');
//         array2.push(k);
//         }
//     }
//  console.log(array1)   ;
//  console.log(array2);
