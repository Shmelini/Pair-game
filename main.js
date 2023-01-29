
// // Создание стола
// function createTable () {
//     let table = document.createElement('div')
//     table.classList.add('table')
//     document.body.append(table)

//     return table
// };
    


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

console.log(initCardsArray(8))



