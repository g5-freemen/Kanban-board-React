import './style/scss/main.scss';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState, useEffect } from 'react';

export const CardsContext = React.createContext();

export default function App() {
  const [ cards, setCards ] = useState([]);

  function loadCards() { // Load cards from localStorage
        let cardsList = JSON.parse( localStorage.getItem('cards') );
        cardsList && setCards([cardsList]);
        console.log('cards=',cards);
  };

  useEffect( () => loadCards(), [] )

  return (
    <CardsContext.Provider value={{cards,setCards}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CardsContext.Provider>
  );
}