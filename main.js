
// Создание стола
function createTable () {
    let table = document.createElement('ul')
    table.classList.add('table')
    document.body.append(table)

    return table
};
    


// Конструктор карт
class Cards {
    constructor (value) {
        this.value = value
        this.isTurned = false
    }
}




function initCardsArray(lenght) {
    let cardArr = []
    for (let i = 0; i < lenght; i++) {
        cardArr.push(new Cards(i))
    }
    cardArr = cardArr.concat(cardArr);
    
    return cardArr.sort(() => Math.random() - 0.5);
}


function createGame() {
    let table = createTable();
    let cards = initCardsArray(8);
    for(let i = 0; i < cards.length; i++) {
        let div = document.createElement('li')
        div.classList.add('card')
       div.textContent = cards[i].value
       table.append(div)
    }

   
}

createGame()



