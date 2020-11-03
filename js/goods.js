const moreButtons = [...document.querySelectorAll('.link')];
const cards = [...document.querySelectorAll('.card')];
const cardOpenMap = {
    medicine: false,
    prom: false,
    agro: false,
    build: false,
}

function toggleCardDetail (event) {
    Object.keys(cardOpenMap).forEach((cardName) => {
        cardOpenMap[cardName] = false;
    });
    cardOpenMap[event.target.id] = true;

    toggleAccordion();
}

function toggleAccordion () {
    Object.keys(cardOpenMap).forEach((cardName) => {
       const currentCard = getElementById(cards, cardName);
       const currentMoreButton = getElementById(moreButtons, cardName);

       if (cardOpenMap[cardName]) {
           currentCard.classList.remove('card--collapsed');
           currentMoreButton.classList.add('link--hidden');
       } else if (currentCard && !currentCard.classList.contains('card--collapsed')) {
           currentCard.classList.add('card--collapsed');
           currentMoreButton.classList.remove('link--hidden');
       }
    });
}

function getElementById (elements, id) {
    return elements.find((element) => element.id === id);
}
