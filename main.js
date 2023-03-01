
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
        let curCardsVal = [];
        div.addEventListener('click', ()=> {
            if (document.getElementsByClassName("turned").length == 0 || document.getElementsByClassName("turned").length == 1) {
                    div.classList.toggle('turned')
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






