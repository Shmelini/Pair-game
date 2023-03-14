/**
 * 1) В конце объявления функции ';' Не нужен
 * 2) Показал как указывать тип аргумента
 *  функции и возвращаемого значения. Желательно
 *  их указывать, чтобы IDE понимала лучше код
 *
 */

class Table {
    table;
    cards = [];

    /**
     *
     * @param {number} cardsCount
     */
    constructor(cardsCount = 8) {
        this.table = document.createElement('ul');
        this.table.classList.add('table');
        document.body.append(this.table);

        this.initCardsArray(cardsCount);
        this.renderCards();
    }

     initCardsArray(length) {
        let cardArr = []
        for (let i = 0; i < length; i++) {
            cardArr.push(i+1)
        }
        cardArr = cardArr.concat(cardArr);

        this.cards = cardArr.sort(() => Math.random() - 0.5);
    }

    renderCards () {
        for (let i = 0; i < this.cards.length; i++) {
            let div = document.createElement('li');
            div.classList.add('card');
            div.textContent = this.cards[i];
            div.addEventListener('click', () => {

            });
            this.table.append(div);
        }

        this.table.addEventListener('click', (e) => {
            const target = e.target
            if (!target.classList.contains('card')) {
                return;
            }
            target.classList.add('turned')


            const turned = document.getElementsByClassName("turned")

            if (turned.length === 2) {
                if (turned[0].textContent === turned[1].textContent) {
                    Array.from(turned).forEach((element) => element.remove())
                } else {
                    setTimeout(() => {
                        Array.from(turned).forEach((element) => element.classList.remove('turned'))
                    }, 500);
                }
            }

            if (!document.getElementsByClassName("card").length) {
                alert('Поздравляю игра пройдена');
            }
        })
    }
}

new Table();






