import './style/scss/main.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LoadUsersService from './components/services/LoadUsersService';
import LoadCardsService from './components/services/LoadCardsService'
import React, { useState, useEffect, useCallback } from 'react';

export const CardsContext = React.createContext();

export default function App() {
  const [ cards, setCards ] = useState([]);
  const [ users, setUsers ] = useState(null);

  const getCards = useCallback(async () => {
    const cards = await LoadCardsService.getCards();
    setCards(cards);
 }, []);

  useEffect( () => getCards(), [] );

  const getUsers = useCallback(async () => {
    const usersList = await LoadUsersService.getUsers();
    setUsers(usersList);
 }, []);

  useEffect( () => getUsers(), [] );

  return (
    <CardsContext.Provider value={{users, cards, setCards}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CardsContext.Provider>
  );
}