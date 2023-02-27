
// Создание стола
function createTable() {
    let table = document.createElement('ul')
    table.classList.add('table')
    document.body.append(table)

    return table
};

function initCardsArray(lenght) {
    let cardArr = []
    for (let i = 0; i < lenght; i++) {
        cardArr.push(i+1)
    }
    cardArr = cardArr.concat(cardArr);

    return cardArr.sort(() => Math.random() - 0.5);
}

console.log(initCardsArray(8))


function createGame() {
    let table = createTable();
    let cards = initCardsArray(8);
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement('li')
        div.classList.add('card')
        div.textContent = cards[i]
        div.classList.add('turned')
        div.addEventListener('click', () => {
            div.classList.toggle('turned')
            if (document.getElementsByClassName("turned").length == 0) {
                console.log('победа')
            }
        })
        table.append(div)
        
    }
    
   
}

createGame()

function ruleNumeroUno() {
    document.getElementsByClassName("turned").length
}

ruleNumeroUno();






