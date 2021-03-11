import './style/scss/main.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LoadUsersService from './components/services/LoadUsersService';
import React, { useState, useEffect, useCallback } from 'react';

export const CardsContext = React.createContext();

export default function App() {
  const [ cards, setCards ] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [ users, setUsers ] = useState(null);

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