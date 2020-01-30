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
 








