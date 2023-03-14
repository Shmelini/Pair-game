
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
    let curCardsVal = [];
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement('li');
        div.classList.add('card');
        div.textContent = cards[i];
        div.addEventListener('click', ()=> {
            if (document.getElementsByClassName("turned").length == 0 || document.getElementsByClassName("turned").length == 1) {
                    div.classList.toggle('turned')
                    curCardsVal.push(div.textContent)
            }
            else {
                div.classList.remove('turned')
            }
// Вот здесь я пробую сделать механику, где 2 одинаковых карты остаются открытыми, но работает оно только по факту клика, что хуйня

            if (curCardsVal.length > 2 && curCardsVal[0] !== curCardsVal[1]) {
                curCardsVal = []
                div.classList.remove('turned')
            }
            console.log(curCardsVal)

            if (curCardsVal[0] === curCardsVal[1]) {
                document.getElementsByClassName('turned').classList.add('done')
            }
        });
        table.append(div);
        
    }; 
};

createGame()

// function ruleNumeroUno() {
//     document.getElementsByClassName("turned").length
// }

// ruleNumeroUno();






