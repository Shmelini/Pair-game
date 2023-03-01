
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




function createGame() {
    let table = createTable();
    let cards = initCardsArray(8);
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement('li');
        
        div.classList.add('card');
        div.textContent = cards[i];
        div.setAttribute('data-value', div.textContent)
        // Тут я создал массив, куда хочу пихать значения карт
        let curCardsVal = [];
        // Тут то, что происходит по нажатию на карты
        div.addEventListener('click', ()=> {
            if (document.getElementsByClassName("turned").length == 0 || document.getElementsByClassName("turned").length == 1) {
                    div.classList.toggle('turned')
                    // Я хуй пойму, что происходит с этим массивом по нажатию. Он либо множится, либо значение в нем перезаписывается к хуям
                    curCardsVal.push(div.dataset.value)
            }
            else {
                div.classList.remove('turned')
            }
            console.log(curCardsVal)
        });
        table.append(div);  
    }; 
};

createGame()

function ruleNumeroUno() {
    document.getElementsByClassName("turned").length
}

ruleNumeroUno();






