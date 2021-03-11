async function getCards() {
    try {
        return getCachedCards();
    } catch (e) {
        return [];
    }
}

function getCachedCards() {
    const cachedData = localStorage.getItem('cards');
    console.log('cards (service)=',cachedData);
    
    if (cachedData) return JSON.parse(cachedData)
    else throw new Error('No cached cards');
}

export default { getCards }

  // function loadCards() { // Load cards from localStorage
  //       let cardsList = JSON.parse( localStorage.getItem('cards') );
  //       cardsList && setCards([cardsList]);
  //       console.log('cards=',cards);
  // };